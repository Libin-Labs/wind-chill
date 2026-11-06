# @lp-labs/wind-chill

Bounded Canadian/US wind-chill formula with explicit units.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/wind-chill
```

## Working example

```js
import { windChillC } from '@lp-labs/wind-chill';
if (Math.abs(windChillC(-20, 30) + 32.56804) > 0.00001) throw new Error('Wind chill');
```

CommonJS: `const api = require('@lp-labs/wind-chill')`.

## Behavior, customization and limits

windChillC(tempC,speedKph) uses13.12+0.6215T-11.37v^0.16+0.3965Tv^0.16, only temperature -80..10C and speed4.8..200km/h. windChillF converts Fahrenheit and mph with exact1.609344 factor then applies same domain. Outside model throws; no fallback to air temperature. Constant-time approximation, no exposure duration, alerts, frostbite or health recommendations.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function windChillC(temperatureC: number, speedKph: number): number;
export declare function windChillF(temperatureF: number, speedMph: number): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
