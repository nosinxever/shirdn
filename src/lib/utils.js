import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function convertTimeFormat(dateTimeString) {
  // Create a new Date object using the provided date-time string
  const date = new Date(dateTimeString);

  // Specify the options for formatting, including the time zone for China
  const options = {
    timeZone: 'Asia/Shanghai', // Specify the time zone for China
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false // Optional: set to false to use 24-hour time format
  };

  // Convert the date to a readable format in China's time zone
  const readableFormat = date.toLocaleString('en-US', options);
  
  return readableFormat;
}
