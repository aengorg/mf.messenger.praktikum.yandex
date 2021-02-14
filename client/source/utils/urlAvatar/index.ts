import { HOST } from '../../constants/index.js';
export function urlAvatar(url: string | null): string {
  return url ? `${HOST}${url}` : '';
}
