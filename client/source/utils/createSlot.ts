import { TAG_SLOT } from '../constants/index.js';

export function createSlot(name: string): string {
  const $slot = document.createElement(TAG_SLOT);
  $slot.setAttribute('data-slot', name);
  return $slot.outerHTML;
}
