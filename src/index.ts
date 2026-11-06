function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
export function windChillC(temperatureC: number, speedKph: number): number {
  finite(temperatureC, -80, 10);
  finite(speedKph, 4.8, 200);
  const v = speedKph ** 0.16;
  return finite(13.12 + 0.6215 * temperatureC - 11.37 * v + 0.3965 * temperatureC * v);
}
export function windChillF(temperatureF: number, speedMph: number): number {
  finite(temperatureF);
  finite(speedMph);
  return finite((windChillC(((temperatureF - 32) * 5) / 9, speedMph * 1.609344) * 9) / 5 + 32);
}
