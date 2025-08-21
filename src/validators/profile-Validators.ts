import z from 'zod';

export const CreateEmergencyContactSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  contactNumber: z.string().min(1, 'Please provide a contact number'),
  relationship: z.string().min(1, 'Please let us know their relationship to you'),
  isPrimary: z.boolean(),
})