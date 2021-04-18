const fs = require('fs');

const archivo = './db/data.json';

const guardarDb = ( data ) => {  /* video 54 */
  /* generar archivo , con datos */
 

   fs.writeFileSync( archivo,JSON.stringify(data) );


} 

const leerDB = () => {

   if( !fs.existsSync(archivo) ){
       return null; 
   }
   
   /* Lectura archicvo  */
   const info = fs.readFileSync( archivo , { encoding: 'utf8' } );
 
   /* parsear json string a un array  */
   const data = JSON.parse(info);
   console.log(data);

  return null;

}




module.exports = {
  guardarDb,
  leerDB

}