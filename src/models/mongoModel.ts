import { Model } from 'mongoose';

export default abstract class MongoModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const data = await this._model.create({ ...obj });
    return data as T;
  }
}