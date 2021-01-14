export const validation = (value, rules) => {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== '')) {
    return [];
  }
  return arr.filter((v) => Boolean(v));
};
