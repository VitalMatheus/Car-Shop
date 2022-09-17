import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './mongoModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

export default class CarModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motos', motorcycleMongooseSchema)) {
    super(model);
  }
}