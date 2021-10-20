/*
Rutas de categoryAmount
host + api/categoryAmount
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  categoryAmountGetAll,
  categoryAmountAddNew,
  categoryAmountUpdateById,
  categoryAmountDeleteById,
} from "../controllers/categoryAmount";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();

router.use( validateJWT );

router.post(
  "/categoryAmount",
  [
    check('Anio', 'El año es obligatorio').not().isEmpty(),
    validatorField
  ],
  categoryAmountGetAll
);

router.post(
  "/categoryAmount/new",
  [
    check('Categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('Anio', 'El año es obligatorio').not().isEmpty(),
    check('ModalidadHorariaID', 'La modalidad horaria es obligatoria').not().isEmpty(),
    check('DiasServicioID', 'El dia servicio es obligatorio').not().isEmpty(),
    check('GuardiaTipoID', 'La guardia tipo es obligatoria').not().isEmpty(),
    check('Monto', 'El monto es obligatorio').not().isEmpty(),
    check('Usuario', 'El usuario es obligatorio').not().isEmpty(),
    validatorField
  ],
  categoryAmountAddNew
);

router.put("/categoryAmount/:id", 
  [
    check('Categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('Anio', 'El año es obligatorio').not().isEmpty(),
    check('ModalidadHorariaID', 'La modalidad horaria es obligatoria').not().isEmpty(),
    check('DiasServicioID', 'El dia servicio es obligatorio').not().isEmpty(),
    check('GuardiaTipoID', 'La guardia tipo es obligatoria').not().isEmpty(),
    check('Monto', 'El monto es obligatorio').not().isEmpty(),
    check('Usuario', 'El usuario es obligatorio').not().isEmpty(),
    validatorField
  ],
  categoryAmountUpdateById);

router.delete("/categoryAmount/:id", categoryAmountDeleteById);

export default router;
