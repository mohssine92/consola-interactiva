require('colors');


const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();




/* voy a tener que trabajar con varios proceso asyncronos , hay muchas formas de hacer esto en  una app de node , sabemos que todo se Ejecuta por defecto secuencialmente , Asi vamos a crear la siguiente Function 
   main que va ser asyncrono , ASi las Funcciones que implemento dentro pueden tener await => espera la promesa que se resuelva , sino por async  tenia que trabajar con then() y no es el caso ..  ..*/



  const main = async()=>{


     let opt = '';

     do {
        
        opt = await mostrarMenu();
      
        console.log({ opt });

        if( opt !== '0') await pausa();  

     } while ( opt !== '0' );  /* ejecuta la primera vez , asi si la condicion devuelva true , sigua ejecutandose Infinitivamente , hasta que devuelva false . */

    



  }

  main();