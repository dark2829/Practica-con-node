import {getConnection} from '../database/database'
import {queries} from '../database/queries'

export const getAllproductsService = async ()=> {
    let prodctList = null 
    
    try {
        const conn = await getConnection()//funcion asincrona, tarda en ejecutar 
        prodctList = await conn.query(queries.findAll)
    } catch (e) {
        throw e.message
                
    }
    return prodctList;
}

//Insertar un producto linea
export const insertProduct = async (product)=> {
    let idNewProduct = null; //Variable de producto 
    try{
        const conn = await getConnection();//funcion asincrona para envio de datos 
        const result = await conn.query(queries.insert, product);
        idNewProduct = result.insertId;
    }catch (e) {
        throw e.message;
    }
    return idNewProduct;
}

//actualizacion de producto
export const updateProduct = async (product, id) => {
    try {
        const conn = await getConnection();
        await conn.query(queries.update, [product, id]);
    } catch (e) {
        throw e.message;
    }
}

//eliminar producto mediante un id
export const deleteProduct = async id => {
    try {
        const conn = await getConnection()
        await conn.query(queries.delete, id) 
    } catch (e) {
        throw e.message;
    }
}