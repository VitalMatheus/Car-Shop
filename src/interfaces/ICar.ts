import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const carSchema = vehicleZodSchema.merge(z.object({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
}));

export type ICar = z.infer<typeof carSchema>;
