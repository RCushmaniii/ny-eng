import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes and resolve conflicts
 * Uses tailwind-merge to handle conflicting classes intelligently
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
