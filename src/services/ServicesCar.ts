import IService from '../interfaces/IService';
import { carSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

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
}

export default CarService;