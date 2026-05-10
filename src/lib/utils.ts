/**
 * Utilidad para combinar clases de Tailwind CSS.
 * clsx → permite condicionales, objetos, arrays de clases
 * twMerge → resuelve conflictos entre clases Tailwind
 *
 * Uso: cn("base-class", condicion && "active-class", ["otra-clase"])
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
