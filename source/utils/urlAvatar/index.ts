import { HOST, HTTP } from '../../constants/index';
export function urlAvatar(url: string | null): string {
  return url ? `${HTTP}${HOST}${url}` : '';
}
