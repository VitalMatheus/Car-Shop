import { Router } from 'express';
import CarController from '../controllers/ControllerCar';
import CarModel from '../models/modelCars';
import CarService from '../services/ServicesCar';

const route = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.get('/cars', (req, res) => carController.read(req, res));

export default route;