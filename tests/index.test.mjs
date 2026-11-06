import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reference minus20 at30', () => {
  assert.ok(Math.abs(api.windChillC(-20, 30) + 32.56804447632105) < 1e-10);
});
test('reference freezing at10', () => {
  assert.ok(Math.abs(api.windChillC(0, 10) + 3.31465) < 0.0001);
});
test('unit equivalence', () => {
  assert.ok(
    Math.abs(api.windChillF(32, 10 / 1.609344) - (api.windChillC(0, 10) * 1.8 + 32)) < 1e-12,
  );
});
test('model bounds', () => {
  assert.ok(Number.isFinite(api.windChillC(10, 4.8)));
  assert.throws(() => api.windChillC(10.1, 10));
  assert.throws(() => api.windChillC(0, 4.7));
});
test('nonfinite and limits', () => {
  assert.throws(() => api.windChillC(NaN, 10));
  assert.throws(() => api.windChillF(32, Infinity));
  assert.throws(() => api.windChillC(-81, 10));
});
test('formula oracle', () => {
  for (let t = -40; t <= 10; t += 5)
    for (let v = 5; v <= 100; v += 5) {
      const p = Math.exp(0.16 * Math.log(v));
      assert.ok(
        Math.abs(api.windChillC(t, v) - (13.12 + 0.6215 * t - 11.37 * p + 0.3965 * t * p)) < 1e-12,
      );
    }
});
