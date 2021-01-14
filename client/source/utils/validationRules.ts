export const required = (v: unknown): string => {
  if (!v) return 'This field required.';
  return '';
};

export const range = (v: number | string, min = 0, max = Infinity): string => {
  if (typeof v === 'string') v = v.length;
  if (v < min) return `This value small, need more ${min}`;
  if (v > max) return `This value big, need less ${max}`;
  return '';
};

export const email = (v: string): string => {
  const regExp = /\S+@\S+\.\S+/;
  if (!regExp.test(v)) return 'Not email format';
  return '';
};

export const equalPasswords = (v1: string, v2: string): string => {
  if (v1 !== v2) return 'Not equal passwords';
  return '';
};
