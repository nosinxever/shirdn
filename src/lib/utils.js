import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function convertTimeFormat(dateTimeString) {
  // Create a new Date object using the provided date-time string
  const date = new Date(dateTimeString);

  // e.g., "January 1, 2024, 14:32:00"
  const readableFormat = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
  });
  
  return readableFormat;
}
