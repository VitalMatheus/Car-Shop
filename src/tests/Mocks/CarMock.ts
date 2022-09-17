import { number } from 'joi';
import { ICar } from '../../interfaces/ICar';

export const carMock: ICar = {
  model: "Dodge Charger",
  year: 1969,
  color: "Orange",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

export const carMockWithId:ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: "Ford Mustang",
  year: 1970,
  color: "Black",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

export const updatedMock: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: "Camaro SS",
  year: 1977,
  color: "black",
  buyValue: 2500,
  seatsQty: 2,
  doorsQty: 2
}

export const upCarMock: Partial<ICar> = {
  year: 1977,
  color: "black",
  buyValue: 2500,
}