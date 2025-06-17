import {clsx} from "clsx";
import { twMerge } from "tailwind-merge";

export const clsx = (...inputs) => {
  return twMerge(clsx(inputs))
}