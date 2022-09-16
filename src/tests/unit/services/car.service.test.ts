import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/modelCars';
import CarService from '../../../services/ServicesCar';
import { carMock, carMockWithId } from '../../Mocks/CarMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMock); 
		sinon.stub(carModel, 'readOne').onCall(0).resolves(carMockWithId);
	})
	after(() => {
		sinon.restore()
	})
	
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMock);
		});

		it('Failure', async () => {
      let error;
			try {
				await carService.create({});
			} catch (err) {
        error = err
			}
      expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await carService.readOne(carMockWithId._id);
			} catch (err:any) {
				error = err
			}

		expect(error, 'error should be defined').not.to.be.undefined;
		expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
		});
	});
});