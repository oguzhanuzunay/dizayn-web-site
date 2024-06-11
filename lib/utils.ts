import { clsx, type ClassValue } from 'clsx';
import { isMobile } from 'react-device-detect';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToHash = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};

export const isMobileDevice = () => isMobile;
