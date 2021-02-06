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
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regExp.test(v)) return 'Not email format';
  return '';
}

export function equalPasswords(v1: string, v2: string): string {
  if (v1 !== v2) return 'Not equal passwords';
  return '';
}
