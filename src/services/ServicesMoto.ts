import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';
import { IMotorcycle, motoSchema } from '../interfaces/IMotorcycle';
import { ErrorTypes } from '../errors/catalog';

export default class MotoService implements IService<IMotorcycle> {
  private _moto:IModel<IMotorcycle>;
  constructor(model:IModel<IMotorcycle>) {
    this._moto = model;
  }

  public async create(obj:unknown):Promise<IMotorcycle> {
    const parsed = motoSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const data = await this._moto.create(parsed.data); 
    return data;
  }

  public async read(): Promise<IMotorcycle[]> {
    const data = await this._moto.read();
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const data = await this._moto.readOne(_id);
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }

  public async update(_id: string, obj: unknown): Promise<IMotorcycle> {
    const parsed = motoSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const data = await this._moto.update(_id, parsed.data);
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const data = await this._moto.delete(_id);
    console.log('data: ', data);
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }
}