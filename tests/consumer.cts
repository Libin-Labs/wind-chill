import { windChillC } from '@lp-labs/wind-chill';
if (Math.abs(windChillC(-20, 30) + 32.56804) > 0.00001) throw new Error('Wind chill');
// @ts-expect-error invalid argument must be rejected by declarations
windChillC(0, '10');
