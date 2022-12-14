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
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    const data = await this._model.findById(_id);
    return data;
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    if (Object.keys(obj).length === 0) throw new Error(ErrorTypes.EmptyObject);
    const data = await this._model.findOneAndUpdate({ _id }, obj, { new: true, versionKey: false });
    return data;
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _id });
  }
}