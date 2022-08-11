
import app from './app.js';
import { sequelize } from "./database/database.js";

async function main(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
        app.listen(4000);
        console.log('Server is listening on port', 4000);
    }catch(e){
        console.log("Unable to connect to the database:", e);
    }

};

main();