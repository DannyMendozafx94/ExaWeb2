const { Router } = require('express');

const { TramiteController } = require('../controllers/index');

const router = Router();


router.get('/Tramite', TramiteController.traer);

router.get('/Tramite/:id', TramiteController.TraerId);

router.post('/Tramite', TramiteController.create);

router.put('/Tramite/:id', TramiteController.update);

router.delete('/Tramite/:id', TramiteController.deleted);
/** exportar rutas */
module.exports = router;