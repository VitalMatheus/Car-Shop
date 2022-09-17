import IService from '../interfaces/IService';
import { carSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;
  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:unknown):Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const data = await this._car.create(parsed.data); 
    return data;
  }

  public async read(): Promise<ICar[]> {
    const data = await this._car.read();
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }

  public async readOne(_id: string): Promise<ICar> {
    const data = await this._car.readOne(_id);
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const data = await this._car.update(_id, parsed.data);
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }

  public async delete(_id: string): Promise<ICar> {
    const data = await this._car.delete(_id);
    if (!data) throw new Error(ErrorTypes.ObjectNotFound);
    return data;
  }
}

export default CarService;