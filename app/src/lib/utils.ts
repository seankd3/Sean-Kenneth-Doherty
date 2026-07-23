import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Encode path segments so filenames with spaces/special chars load reliably.
 * Leaves already-encoded URLs alone. Preserves leading slash and path structure.
 */
export function safeImageSrc(src: string): string {
  if (!src) return src;
  if (src.includes('%') || src.startsWith('data:') || src.startsWith('http')) {
    return src;
  }
  return src
    .split('/')
    .map((segment) => (segment ? encodeURIComponent(segment) : segment))
    .join('/');
}
