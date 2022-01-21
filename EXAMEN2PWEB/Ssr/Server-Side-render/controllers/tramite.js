const { Tramite } = require('../models');
const { response } = require('express');


// EXPORTMOS NUESTROS MODULOS E INCLUIMOS LA RUTA DE TASK,JS DONDE ESTA GUARDADOS LOS DATOS DE MONGO DB
var express = require('express');
var router = express.Router();


const cors = require('cors');


const app = express();

app.use(cors()).use(express.json());

let tramites = [];

router.get('/', async(req, res) => {
    var tramites = await Tramite.find();
    /*/res.json({

        tis
    });*/
    res.render('index', {
        tramites
    });
});

// AÑADIMOS NUESTRAS DATOS DEL FORMULARIO
router.post('/add', async(req, res, next) => {
    var tramites = new Tramite(req.body);
    await tramites.save();
    console.log(`Datos${tramites}`);
    /*res.json({
        message: 'Datos insertados correctamente'
    });*/
    res.redirect('/');
});

router.get('/turn/:id', async(req, res, next) => {
    let { id } = req.params;
    var tramites = await Tramite.findById(id);
    tramites.estado = !tramites.estado;
    await tramites.save();
    res.redirect('/');
});



router.get('/edit/:id', async(req, res, next) => {
    var tramites = await Tramite.findById(req.params.id);
    console.log(tramites);
    res.render('edit', { tramites });
});

router.post('/edit/:id', async(req, res, next) => {
    var { id } = req.params;
    await Tramite.update({ _id: id }, req.body);
    res.redirect('/');
});
router.put('/edit/:id', async(req, res, next) => {
    var { id } = req.params;
    await Tramite.update({ _id: id }, req.body);
    res.json({
        message: 'Datos actualizados correctamente'
    });
});
// ELIMINAMOS NUESTRA DATOS, PARA AQUELLO SE HACE POR EL ID(IDENTIFICADOR)
router.delete('/delete/:id', async(req, res, next) => {
    let { id } = req.params;
    await Tramite.remove({ _id: id });
    res.json({
        message: 'Datos eliminados correctamente'
    });
});
// ELIMINAMOS NUESTRA DATOS, PARA AQUELLO SE HACE POR EL ID(IDENTIFICADOR)
router.get('/delete/:id', async(req, res, next) => {
    let { id } = req.params;
    await Tramite.remove({ _id: id });

    res.redirect('/');


});




module.exports = router;