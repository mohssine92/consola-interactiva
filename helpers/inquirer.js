const inquirer = require('inquirer');  /* Ela valor de paque nos se cambia  */
require('colors');

/* Video 49 */
const preguntas = [    

   {
       type: 'list',
       name: 'options',
       message: 'que deseas hacer ? ',
       choices: [
          {
            value: '1',
            name:`${'1.'.green } Crear tarea`
          }, 
          {
            value: '2',
            name: `${'2.'.green } Listar tarea`
          },
          {
            value: '3',
            name:`${'3.'.green } tarea Completa`
          },
          {
            value: '4',
            name:`${'4.'.green } tarea(s) pendientes`
          },
          {
            value: '5',
            name:`${'5.'.green } Completar tarea(s)`
          },         
          {
            value: '6',
            name:`${'6.'.green } Borrar tarea`
           },
          {
            value: '0',
            name:`${'0.'.red } Salir`
          },    

       ]
   }
  

]



const inquirerMenu = async() =>{

    console.clear(); 
    console.log('========================='.green);
    console.log(' Seleccione una opcion'.white);
    console.log('=========================\n'.green);  

                         /* Listar menu seleccionable  */
     const { options } = await inquirer.prompt(preguntas); 
   
      return options;

}


const pausa = async()=> {
  
    const question = [
      {
        type: 'input',
        name: 'Enter', 
        message:`Presiona ${ 'enter'.green } para continuar`
      }
    ]

    console.log('\n');

    await inquirer.prompt(question);
    /* es input con tecla enter en este caso se dispara resolve */


}


const leerInput = async( message ) => {

   const question = [
      {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
          if( value.length === 0 ){
            return 'Por Favor ingrese un valor';
          }
          return true;
        }

      },
      
   ];
   

   const { desc }  = await inquirer.prompt(question);
   return desc ; 

}



module.exports ={
    inquirerMenu,
    pausa,
    leerInput
}