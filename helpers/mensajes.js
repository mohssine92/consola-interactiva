/*   require('colors'); */
  const colors = require('colors'); 
  

/* hacemos que esta function regrese una Promesa sin transformarla con async */
const mostrarMenu = () => {


    return new Promise( resolve => {
        
        console.clear();
        console.log('==========================='.green);
        console.log(' Seleccione una opcion'.green);
        console.log('=========================\n'.green);  
        
        
      /*   console.log(  colors.green('Mohssine'));  */
        console.log(`${ '1.'.green } Crear tarea `);
        console.log(`${ '2.'.green } Listar tareas `);
        console.log(`${ '3.'.green } Listar tareas Completas `);
        console.log(`${ '4.'.green } Listar tareas pendientes `);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea `);
        console.log(`${ '0.'.green } Salir\n `);
     
        
       
         /* Creamos la interfaz  */
         const readline = require('readline').createInterface({
             input: process.stdin,
             output: process.stdout
         });
    
        /* opt : es como forms capta lo que esciba una persona  */
        readline.question('Seleccione una opcion: ', ( opt ) =>{  
          
          readline.close();   /* escuchando a enter Tecla  */

           /* Llamdo a resolve , para resolver la promesa ,  */
           resolve( opt );
           
        })
     
         
    
    }) 


   
  
}

const pausa = () => {
  
    return new Promise( resolve  => {
       
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
         
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n `, ( ) =>{
      
          readline.close();  /* en escucha Enter Event  */
         
          resolve();
  
        })
  
  


    });
    
   

  
}


/* Exportar como objeto pude ser que tenremos mas que una function  */
module.exports = {
   mostrarMenu,
   pausa
}