const Tarea = require("./tarea");



class Tareas {

    /* uso obj es facil ed llenar , array falta .pushMetod para rellenar*/
   _listado = {};  

  constructor( ) {
      
     this._listado = {}; 

  }


  get listadoArr(){
     
   const listado = [];

   /* este metodo de este objeto Propio de js  me extiende todo los llaves que tengo en un objeto , y regresa un arreglo de llaves   */
   Object.keys(this._listado).forEach( key => {
      
      const tarea = this._listado[key]; /* obtengo valor de la lleve */
     
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

