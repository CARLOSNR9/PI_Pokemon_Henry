//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");

// // Sincronizando todos los modelos a la vez.
// conn.sync({ force: true }).then(() => {
//     server.listen(process.env.PORT, () => {	
//         console.log(`Servidor escuchando en el puerto ${process.env.PORT}`); // Imprimir el mensaje con el puerto correspondiente
//     });
// });
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const PORT = process.env.PORT || 3001; // Establecer un puerto por defecto

// Sincronizando todos los modelos a la vez.

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {	
        console.log(`Servidor SE escucha en el puerto ${PORT}`);
    });
});
