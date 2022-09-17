import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/modelCars';
import { Model } from 'mongoose';
import { carMock, carMockWithId, updatedMock, upCarMock } from '../../Mocks/CarMock';

describe('Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMock);
		sinon.stub(Model, 'find').resolves([carMock]);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
		sinon.stub(Model, 'findOneAndUpdate').resolves(updatedMock);
	});

  after(() => {
		sinon.restore();
	});

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMock);
		});
	});

		it('_id not found', async () => {
			try {
				await carModel.readOne('QualquerIdErrado');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});

	describe('searching all cars', () => {
		it('successfully found', async () => {
			const carList = await carModel.read();
			expect(carList).to.be.deep.equal([carMock]);
		});
	})

	describe('searching a car by id', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});
	})

	describe('searching a car and update', () => {
		it('succesfully update', async () => {
			const carUpdated = await carModel.update(carMockWithId._id, upCarMock);
			expect(carUpdated).to.be.deep.equal(updatedMock);
		})
	})
});