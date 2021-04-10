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
            name:'1. Crear tarea'
          }, 
          {
            value: '2',
            name:'2. Listar tareas'
          },
          {
            value: '3',
            name:'3. Listar tarea Completas'
          },
          {
            value: '4',
            name:'4. Listar tarea pendientes'
          },
          {
            value: '5',
            name:'5. Completas tarea(s)'
          },         
          {
            value: '6',
            name:'6. Borrar tarea'
          },
          {
            value: '0',
            name:'0. Salir'
          },    

       ]
   }
  

]



const inquirerMenu = async() =>{

    console.clear(); 
    console.log('==========================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('=========================\n'.green);  

 
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



module.exports ={
    inquirerMenu,
    pausa
}