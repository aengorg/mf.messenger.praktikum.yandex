export const required = (v) => {
  if (!v) return 'This field required.';
  return '';
};

export const range = (v, min = 0, max = Infinity) => {
  if (typeof v === 'string') v = v.length;
  if (v < min) return `This value small, need more ${min}`;
  if (v > max) return `This value big, need less ${max}`;
  return '';
};

export const email = (v) => {
  const regExp = /\S+@\S+\.\S+/;
  if (!regExp.test(v)) return 'Not email format';
  return '';
};

export const equalPasswords = (v1, v2) => {
  if (v1 !== v2) return 'Not equal passwords';
  return '';
};
