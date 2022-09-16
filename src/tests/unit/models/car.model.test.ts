import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/modelCars';
import { Model } from 'mongoose';
import { carMock } from '../../Mocks/CarMock';

describe('Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMock);
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

		it('_id not valid', async () => {
			try {
				await carModel.readOne('6324db0j072a8e288519e10e');
			} catch (error: any) {
				expect(error.message).to.be.eq('ObjectNotFound');
			}
		});
});