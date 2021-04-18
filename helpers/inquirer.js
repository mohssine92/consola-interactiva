const inquirer = require('inquirer');  /* Ela valor de paque nos se cambia  */
require('colors');


var questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate: function (value) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when: function (answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
]; /* example de question , interafz interacctiva  */



const inquirerMenu = async() =>{

    console.clear(); 
    console.log('========================='.green);
    console.log(' Seleccione una opcion'.white);
    console.log('=========================\n'.green);  

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
           name:`${'0.'.red } salir`
         },    

      ]
  }
 

       ]

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