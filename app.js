const { inquirerMenu, pausa } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");




console.clear();





  const main = async()=>{


     let opt = '';

     do {
        
        /*  opt = await inquirerMenu(); 
          
         console.log({ opt }); */

        const comidas = [ 'burger', 'hamburger' , 'soisisoo'];

       

        const tareas = new Tareas();

        comidas.forEach( comida => {
         
         const tarea = new Tarea( comida ); 

         tareas._listado[tarea.id] = tarea;   /* manejamos de una manera muy parecida como se trabaje en base de datos no relacionales  */
              
        });
   
        console.log(tareas); 



       /*  const tarea = new Tarea('Comprar Burger');  */
     /*    console.log(tarea);
 */
       
 
      /*   tareas._listado[tarea.id] = tarea ; */
        /*  tareas._listado[2] = tarea ; */
        /* console.log(tareas);
 */
          
         await pausa();
       

     } while ( opt !== '0' ); 

     
     
    



  }

  main();