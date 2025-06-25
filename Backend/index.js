const express = require('express');
const Productos = require('./Modelos/Productos');

const app = express();

app.use(express.json());

app.get('/Productos', async (req, res) => {
    try {

        const LIstaProductos = await Productos.findAll()
        if (LIstaProductos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron Productos' });
        }else{
            res.status(200).json(LIstaProductos);
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los Productos'+ error });
    }
});

app.post('/Productos', async (req, res) => {
    try {
        
        const NewProductos = await Productos.create(req.body);
        res.status(200).json({'mensaje': 'registro exitoso',data: NewProductos});

    } catch (error) {
        res.status(500).json({ error: 'Error al crear el Producto'+ error });
        
    }
});


app.delete('/Productos/:id', async (req, res) => {


    try {
        
        console.log(req.params.id);

        
        const deleted = await Productos.destroy({
            where: {id:req.params.id}
        });
        if (deleted) {
            const ProductoElimanado = await Productos.findByPk(req.params.id);
            res.status(200).json({ mensaje: 'Producto Eliminado exitosamente',data: ProductoElimanado});
        }else{
            res.status(404).json({ mensaje: 'El Producto no existe',data:[] });
        }
      

    } catch (error) {
        res.status(500).json({ error: 'Error al Eliminar el producto'+ error });
        
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});