//iportar la clase de app en este proyecto 
import app from './app';

//expres escucha en 
app.listen(app.get('port'),()=>console.log(`Server on port ${app.get('port')}`))
