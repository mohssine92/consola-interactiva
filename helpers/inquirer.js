const inquirer = require('inquirer');  /* Ela valor de paque nos se cambia  */
require('colors');

/* Video 49 */
const preguntas = [    

   {
       type: 'list',
       name: 'options',
       message: 'que deseas hacer ? ',
       choices: ['opt1', 'opt2','opt3']
   }



]

const inquirerMenu = async() =>{

   /*  console.clear(); */
    console.log('==========================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('=========================\n'.green);  

    /* Regresa una promesa , esta implementada dentro de uan funccion asyn asi puedo usar await  */
    const opt = await inquirer.prompt(preguntas);

    return opt;

}

module.exports ={
    inquirerMenu
}