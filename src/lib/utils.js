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


export function timeSince(dateTimeString) {
  // Current date-time
  const now = Date.now();

  // Convert provided date-time string to Date object
  const date = new Date(dateTimeString);

  // Calculate difference in milliseconds
  let diff = now - date.getTime();

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  // Format output based on the duration
  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  } else if (seconds < 60) {
    return "Just now";
  }
}
