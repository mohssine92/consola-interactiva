const { v4: uuidv4 } = require('uuid');    /* video : 51 */




/* ECS6 incorporo clases en js  */
class Tarea {

  /* en js no es necesario definir propiedades , se puede inicial en lado del constructor */
  id = '';
  desc = '';
  completadoEn ;

  constructor( desc ) {
     
      this.id = uuidv4();
      this.desc = desc;
      this.completadoEn = null;
 
  }





}

module.exports = Tarea;

