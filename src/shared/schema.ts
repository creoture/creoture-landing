// src/shared/validation.ts
import { z } from "zod";

// Contact form validation
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// User form validation (if needed)
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
