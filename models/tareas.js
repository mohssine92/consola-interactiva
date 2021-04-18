const Tarea = require("./tarea");



class Tareas {

    /* uso obj es facil ed llenar , array falta .pushMetod para rellenar*/
   _listado = {};  

  constructor( ) {
      
     this._listado = {}; 

  }


  get listadoArr(){
     
   const listado = [];

   /* este metodo de este objeto Propio de js  , video 53 min:5:00  , extraer los lleves que tengo en objeto , */
   Object.keys(this._listado).forEach( key => {
      
      const tarea = this._listado[key];  
     
      listado.push( tarea ); 
    
   }); 
     
   return listado;  /* valore de llave */
  
  }

  crearTarea( desc = '' )
  {
     const tarea = new Tarea( desc );  
     this._listado[tarea.id] = tarea;
  }




}

module.exports = Tareas;

