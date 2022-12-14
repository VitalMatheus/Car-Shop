import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    const data = await this._service.create(req.body);
    return res.status(201).json(data);
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const data = await this._service.read();
    return res.status(200).json(data);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const data = await this._service.readOne(id);
    return res.status(200).json(data);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const data = await this._service.update(id, req.body);
    return res.status(200).json(data);
  }

  public async delete(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).end();
  } 
}