import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const motoSchema = vehicleZodSchema.merge(z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().max(2500),
}));

export type IMotorcycle = z.infer<typeof motoSchema>;
