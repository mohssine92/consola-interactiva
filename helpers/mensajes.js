require('colors');



/* hacemos que esta function regrese una Promesa sin transformarla con async */
const mostrarMenu = () => {
   
   console.clear();
   console.log('==========================='.green);
   console.log(' Seleccione una opcion'.green);
   console.log('=========================\n'.green);    /* \n : salto de linea  */

   console.log(`${ '1.'.green } Crear tarea `);
   console.log(`${ '2.'.green } Listar tareas `);
   console.log(`${ '3.'.green } Listar tareas Completas `);
   console.log(`${ '4.'.green } Listar tareas pendientes `);
   console.log(`${ '5.'.green } Completar tarea(s)`);
   console.log(`${ '6.'.green } Borrar tarea `);
   console.log(`${ '0.'.green } Salir\n `);

   /* Preparar  la interfaz Representada al user de la consola */
  
   /* Paquete propio de node , no hay que instalarlo */  /* simplemente creando interfaz que voy a estar utulizando para mostrar y recibir infs al usuario  video : 46*/
   
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });


   /* utulizando la Interfaz que hemos creado */ /* video 46 */
   readline.question('Seleccione una opcion: ', (opt) =>{  
     /* console.log( opt );  aqui tengo la opcio mandad por form*/
      readline.close(); 
      
   })

}

const pausa = () => {
    /* atraves de paquete hemos creado una interfaz que consta funccione -..forms */
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /* Input de consola */
    readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n `, (opt) =>{
      
      readline.close();  /* en escucha Enter Evenrt*/

    })


}


/* Exportar como objeto pude ser que tenremos mas que una function  */
module.exports = {
   mostrarMenu,
   pausa
}