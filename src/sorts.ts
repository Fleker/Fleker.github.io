import { BaseEntry } from "./entries";

export function dateSort(a: BaseEntry, b: BaseEntry) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export function alphaSort(map: Record<string, BaseEntry>) {
  return Object.keys(map).sort();
}
