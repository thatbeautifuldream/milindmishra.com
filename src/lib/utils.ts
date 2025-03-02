import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a Unix timestamp to a date string
 * @param timestamp - Unix timestamp in seconds
 * @returns Date string in MM/YYYY format
 */
export function formatDate(timestamp: number | null) {
  if (!timestamp) return "Present";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(new Date(timestamp * 1000));
}

/**
 * Converts a date string in Indian format (DD/MM/YYYY) to Unix timestamp
 * @param dateStr - Date string in DD/MM/YYYY format
 * @returns Unix timestamp in seconds
 * @throws Error if date format is invalid
 */
export function indianDateToUnixTimestamp(dateStr: string): number {
  // Validate the date format using regex
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dateStr.match(dateRegex);

  if (!match) {
    throw new Error("Invalid date format. Please use DD/MM/YYYY format");
  }
  const [, day, month, year] = match;

  // Create Date object (months are 0-indexed in JavaScript)
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  // Validate if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  // Convert to Unix timestamp (seconds)
  return Math.floor(date.getTime() / 1000);
}

/**
 * Formats a Unix timestamp to Indian date format (DD/MM/YYYY)
 * @param timestamp - Unix timestamp in seconds
 * @returns Date string in DD/MM/YYYY format
 */
export function unixTimestampToIndianDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
