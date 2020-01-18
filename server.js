const app = require('./app/app');

const port = process.env.PORT || 5555;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});