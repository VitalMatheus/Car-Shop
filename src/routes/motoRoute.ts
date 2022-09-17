import { Router } from 'express';
import MotoController from '../controllers/ControllerMoto';
import MotoModel from '../models/modelMotorcycle';
import MotoService from '../services/ServicesMoto';

const route = Router();

const moto = new MotoModel();
const motoService = new MotoService(moto);
const motoController = new MotoController(motoService);
const MOTO_ID = '/motorcycles/:id'; 

route.get(MOTO_ID, (req, res) => motoController.readOne(req, res));
route.put(MOTO_ID, (req, res) => motoController.update(req, res));
route.delete(MOTO_ID, (req, res) => motoController.delete(req, res));
route.post('/motorcycles', (req, res) => motoController.create(req, res));
route.get('/motorcycles', (req, res) => motoController.read(req, res));

export default route;