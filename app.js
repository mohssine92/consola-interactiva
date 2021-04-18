const { guardarDb, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu,
        pausa,
        leerInput 
} = require("./helpers/inquirer"); /* aquimi paquete de funcciones , voy desestructurando  */

const Tareas = require("./models/tareas");


  const main = async()=>{


     let opt = '';

     const tareas = new Tareas(); 

     const tareasDB = leerDB();

     if( tareasDB ){
       /* establecer las tareas */

     }
     await pausa();

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
             console.log(tareas.listadoArr); 

             break;
             
        }

        /* procesar el guardo de datos , en un archivo ,sera mi base datos  */ /* video 54 */ 
        /*   guardarDb( tareas.listadoArr );  */
               
                
         await pausa();
       
     } while ( opt !== '0' ); 

     

  }

  main();