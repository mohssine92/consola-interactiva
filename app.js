const { inquirerMenu } = require("./helpers/inquirer");
const { pausa } = require("./helpers/mensajes");



console.clear();





  const main = async()=>{


     let opt = '';

     do {
        
        opt = await inquirerMenu();
        
        console.log({ opt });


     } while ( opt !== '0' ); 

     
    



  }

  main();