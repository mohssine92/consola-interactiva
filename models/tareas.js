require('colors');

const Tarea = require("./tarea");



class Tareas {

   /* uso obj es facil de llenar y borra objetos dentro del objeto padre , array falta .pushMetod para rellenar*/
   _listado = {};  

  constructor( ) {
      
     this._listado = {}; 

  }

  borrarTarea( id ='' ){
      /* eleminar prop del objeto  */
    
      if( this._listado[id] ){
        delete this._listado[id]; 
        console.log('Tarea Borrada '.red.italic);
      }
    
  }

  cargarTareasFromArr( tareas = [] ) {
  
    tareas.forEach( tarea => {
        /*  transformar array a objetos */
        this._listado[tarea.id] = tarea;

    });

   
          
 
  }


  get listadoArr(){
     
   const listado = [];

   /* este metodo de este objeto Propio de js  , video 53 min:5:00  , extraer los lleves que tengo en objeto , */
   Object.keys(this._listado).forEach( key => {
      
      const tarea = this._listado[key];  
     
      listado.push( tarea ); 
    
   }); 
     
   return listado; /* colleccion de valores */
  
  }

  crearTarea( desc = '' )
  {
     const tarea = new Tarea( desc );  
     this._listado[tarea.id] = tarea;
  }

  listadoCompleto(){
     
    console.log();
    this.listadoArr.forEach(( tarea , i ) => {
     
      const number = `${i+1}`.green;
      const { desc } = tarea;
      const { completadoEn } = tarea;
   
      const Estado = (completadoEn)
                          ? 'Completada'.green
                          : 'Pendiente'.red 

      console.log(`${number} ${desc} :: ${Estado}`);       

       
    });


  }

  listarPendientesCompletadas( completadas = true ){
     console.log(); /* genera espacio en interfaz consola */

     let contador = 0;

     this.listadoArr.forEach(( tarea ) => {
     
     
        const { desc , completadoEn } = tarea;
      
        const Estado = (completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red 
       
         

        if( completadas ){
          
          if( completadoEn ){
             contador +=1;   
             console.log(`${contador.toString().green} ${'.'.green} ${desc} :: ${completadoEn.green}`);   
 
          }
           

        }else{
          /* mostrar pendientes */

          if( !completadoEn ){
            contador +=1;    
            console.log(`${ (contador + '.').green } ${desc} :: ${Estado}`); 

          }
         
           

        }

        
     });



          


  }

  toggleCompletadas ( ids = [] ) {
     
      ids.forEach( id => {
        
         const tarea = this._listado[id]
         
         if( !tarea.completadoEn ) {
          
             tarea.completadoEn = new Date().toISOString()
  
         }
  
       /* como js pasa sus objetos por referencia , un cambio como este se actualiza en el objeto original por
          Ref, es como subscribir una variable  */

      });

      this.listadoArr.forEach( tarea => {
        
         if( !ids.includes(tarea.id) ) {
            this._listado[tarea.id].completadoEn = null

         }

      });
       
     

  }






}

module.exports = Tareas;

