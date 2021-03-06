const { guardarDb, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu,
        pausa,
        leerInput,
        listarBorrarTarea,
        confirmar,
        showListadoChecklist
} = require("./helpers/inquirer"); /* aquimi paquete de funcciones , voy desestructurando  */

const Tareas = require("./models/tareas");


  const main = async()=>{


     let opt = '';

     const tareas = new Tareas(); 

     /* traer data del archivo base de datos , que se va reescribirse en cada instancia */
     const tareasDB = leerDB();

     if( tareasDB ){
       /* establecer las tareas , lograDo ciclo infinito para la data => Data persistente */
       tareas.cargarTareasFromArr( tareasDB );

     }
     

     do {
        
        
        opt = await inquirerMenu(); 
          
        
        switch ( opt ) {
           
            case '1':
             /* crear  Tarea */
             const desc = await leerInput('Description:');
             tareas.crearTarea( desc );

             break;

             case '2':
             /* Listar Tareas */
             tareas.listadoCompleto();

             break; 

             case '3':
             /* Tareas Completas */
             tareas.listarPendientesCompletadas(true);         
 
             break;

             case '4':
              /* Tareas pendientes */
            
             tareas.listarPendientesCompletadas(false);    
 
             break;

             case '5':
              /* marcar como completado o pendiente */
             const ids = await showListadoChecklist( tareas.listadoArr );
             tareas.toggleCompletadas(ids);
             
             
             break;

             case '6':
              /* Borrar  tare  */
              const id = await listarBorrarTarea( tareas.listadoArr );
             
              if( id !== '0'){ 
                const ok = await confirmar('Estas seguro?');
                if( ok ){ tareas.borrarTarea( id )}

              }
              
              break
             
        }

        /* procesar el guardo de datos , en un archivo ,sera mi base datos  */ /* video 54 */ 
        /* lo que hace reescribir archivo en cada ejecucion (cada instancias) , para tener data persistente hemos creado un ciclo de vida infinito  ver linea leerDB();   tareas.cargarTareasFromArr( tareasDB );  */
          guardarDb( tareas.listadoArr ); 
               
                
         await pausa();
       
     } while ( opt !== '0' ); 

     

  }

  main();