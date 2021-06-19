import {getAllproductsService, insertProduct, updateProduct, deleteProduct} from '../services/products.service'

export const findAllProducts = async (req, res) => {
    let response = null; 
    let status = null;
    try {
        const productsList = await getAllproductsService()
        response = {
            success:true,
            data: productsList,
            message:"List products"
        }
        status = 200
    } catch (e) {
        response = {
            success:false,
            data:[],
            message:"Not found list products"
        }
        status = 400
    }
    res.status(status)
    res.json(response)
}

export const insert = async (req, res) => {
    let response = null; 
    let status = null; 
    try {
        const product = req.body;
        const id = await insertProduct(product);
        response = {
            success:true,
            data: id,
            message: "New Product insert"
        }
        status = 201;
    } catch (e) {
        console.log(e);
        response = {
            success:false,
            data: null,
            message: "Error product insert",
            exception: e.message
        }
        status = 400;
    }
    res.status(status);
    res.json(response);
}

export const update = async (req, res) => {
    let response = null;
    let status = null; 
    try {
        const {id} = req.query
        const product = req.body
        await updateProduct(product, id);
        response = {	
            succes:true,
            data:null,
            message:"Prodcut update"
        }
        status = 200; 
    } catch (e) {
        response = {	
            succes:flase,
            data:null,
            message:"Error product update", 
            exception: e.message
        }
        status = 400; 
    }
    res.status(status);
    res.json(response);
}

export const delete_product = async (req, res) => {
    let response = null;
    let status = null;
         
    try {
        const {id} = req.query
        await deleteProduct(id)
        response = {	
            succes:true,
            data:null,
            message:"Prodcut delete"
        }
        status = 202; 
    } catch (e) {
        response = {	
            succes:false,
            data:null,
            message:"Error delete product", 
            exception: e.message
        }
        status = 400; 
    }
    res.status(status);
    res.json(response);
}