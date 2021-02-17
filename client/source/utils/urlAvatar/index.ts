import { HOST } from '../../constants/index';
export function urlAvatar(url: string | null): string {
  return url ? `${HOST}${url}` : '';
}
