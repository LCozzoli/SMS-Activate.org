import 'reflect-metadata';
import 'dotenv/config';

export * from './ressources/comon';
export * from './ressources/errors';
export * from './ressources/options';
export * from './ressources/status';
export * from './ressources/responses';
export * from './lib/parts/utils/number';

import { SMSActivate } from './lib';
export { SMSActivate };
export default SMSActivate;
