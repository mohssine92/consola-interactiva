const Tarea = require("./tarea");



class Tareas {

    /* uso obj es facil ed llenar , array falta .pushMetod para rellenar*/
   _listado = {};  

  constructor( ) {
      
     this._listado = {}; 

  }


  crearTarea( desc = '' )
  {
     const tarea = new Tarea( desc );  
     this._listado[tarea.id] = tarea;
  }




}

module.exports = Tareas;

