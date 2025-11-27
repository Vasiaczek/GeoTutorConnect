import { z } from 'zod';

export const contactSubmissionSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Valid email is required'),
	subject: z.string().optional(),
	message: z.string().min(1, 'Message is required'),
	service: z.string().optional()
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
