/*Todo lo que se realiza aqui se le denomina modulos*/
import express from 'express'; //exportar express
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
import productsRoutes from './routes/products.routes'
//inicializar express en una variable
const app = express()

//configuracion de puerto > 3000
app.set('port', config.port)

//midleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//rutas del servidor
app.use("/products",productsRoutes)

//exportar 
export default app