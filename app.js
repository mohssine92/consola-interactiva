const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");




  const main = async()=>{


     let opt = '';

     const tareas = new Tareas();  /* Objetc Type Tareas */ 

     do {
        
         opt = await inquirerMenu(); 
        
         
         /* cuando tenemos Opciones seleccionadas , usar un switch mas Fafcil a taratar  */
         switch ( opt ) {
           
            case '1':
             /* crear  Tarea */
             const desc = await leerInput('Description:');
             tareas.crearTarea( desc );

             break;

             case '2':
             /* Listar Tareas */ 
             console.log(tareas._listado); 

             break;
             
         }
          
         await pausa();
       
     } while ( opt !== '0' ); 

     
     
    



  }

  main();