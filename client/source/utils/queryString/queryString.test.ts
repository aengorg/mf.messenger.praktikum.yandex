import 'mocha';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import { queryString } from './index';

describe('QS', () => {
  it('простой объект', () => {
    const obj = { a: 1 };

    const result = queryString(obj);

    expect(result).to.equal('/?a=1');
  });

  it('вложенный объект', () => {
    const obj = { a: { b: 1 } };

    const result = queryString(obj);

    expect(result).to.equal('/?a[b]=1');
  });

  it('вложенный объект - несколько на одином уровне', () => {
    const obj = { a: { b: 1, c: 2 } };

    const result = queryString(obj);

    expect(result).to.equal('/?a[b]=1&a[c]=2');
  });

  it('вложенный объект - несколько на разных уровнях', () => {
    const obj = { a: { b: 1, c: 2 }, d: 3 };

    const result = queryString(obj);

    expect(result).to.equal('/?a[b]=1&a[c]=2&d=3');
  });

  it('простые типы', () => {
    const obj = { a: 1, b: '2', c: true, d: false, e: null };

    const result = queryString(obj);

    expect(result).to.equal('/?a=1&b=2&c=true&d=false&e=null');
  });

  it('undefined', () => {
    const obj = { a: undefined };

    const result = queryString(obj);

    expect(result).to.equal('/?');
  });
});
