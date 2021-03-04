type Indexed<T = unknown> = {
  [key in string]: T;
};

function isObject(v: any): boolean {
  return typeof v === 'object' && v.constructor === Object;
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    try {
      if (isObject(rhs[p])) {
        lhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }
  return lhs;
}
