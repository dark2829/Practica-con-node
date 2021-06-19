import mysql from 'promise-mysql'
import config from '../config'

const dbSettings = {
    host:"18.116.247.121",
    user:config.dbUser,
    password:config.dbPassword,
    database:config.dbDatabase
}

//obtener la respuesta y obtnerla en una funcion flecha
//Respuesta de la bd
export const getConnection = ()=>{
    let connection = null; 
    try{
        connection = mysql.createConnection(dbSettings)
    }catch(e){
        cconsole.log("databse connection error")
    }
    return connection;
}