const fs = require('fs');

const guardarDb = ( data ) => {  /* video 54 */

   const archivo = './db/data.json';

   fs.writeFileSync( archivo,JSON.stringify(data) );


} 





module.exports = {
  guardarDb

}