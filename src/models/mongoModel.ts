import { Model, isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';

export default abstract class MongoModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const data = await this._model.create({ ...obj });
    return data as T;
  }

  public async read(): Promise<T[]> {
    const data = await this._model.find();
    return data;
  }

  public async readOne(_id: string): Promise<T | null> {
    console.log(_id);
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    const data = await this._model.findById(_id);
    return data;
  } 
}