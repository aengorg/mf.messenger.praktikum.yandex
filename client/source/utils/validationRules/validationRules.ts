export function required(v: unknown): string {
  if (!v) return 'This field required.';
  return '';
}

export function range(v: number | string, min = 0, max = Infinity): string {
  if (typeof v === 'string') v = v.length;
  if (v < min) return `This value small, need more ${min}`;
  if (v > max) return `This value big, need less ${max}`;
  return '';
}

export function email(v: string): string {
  const regExp = /?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (!regExp.test(v)) return 'Not email format';
  return '';
}

export function equalPasswords(v1: string, v2: string): string {
  if (v1 !== v2) return 'Not equal passwords';
  return '';
}
