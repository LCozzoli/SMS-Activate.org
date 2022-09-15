import { use } from 'typescript-mix';
import { checkExtraActivation } from './routes/checkExtraActivation';
import { createTaskForCall } from './routes/createTaskForCall';
import { getActiveActivations } from './routes/getActiveActivations';
import { getAdditionalService } from './routes/getAdditionalService';
import { getBalance } from './routes/getBalance';
import { getBalanceAndCashBack } from './routes/getBalanceAndCashBack';
import { getExtraActivation } from './routes/getExtraActivation';
import { getIncomingCallStatus } from './routes/getIncomingCallStatus';
import { getMultiServiceNumber } from './routes/getMultiServiceNumber';
import { getNumbersStatus } from './routes/getNumbersStatus';
import { getNumberV2 } from './routes/getNumberV2';
import { getOutgoingCalls } from './routes/getOutgoingCalls';
import { getPrices } from './routes/getPrices';
import { getStatus } from './routes/getStatus';
import { getTopCountriesByService } from './routes/getTopCountriesByService';
import { setStatus } from './routes/setStatus';

export interface Activations
  extends getNumbersStatus,
    getTopCountriesByService,
    getBalance,
    getBalanceAndCashBack,
    getActiveActivations,
    getNumberV2,
    getMultiServiceNumber,
    setStatus,
    getStatus,
    getPrices,
    getIncomingCallStatus,
    getAdditionalService,
    getExtraActivation,
    checkExtraActivation,
    createTaskForCall,
    getOutgoingCalls {}

export class Activations {
  @use(
    getNumbersStatus,
    getTopCountriesByService,
    getBalance,
    getBalanceAndCashBack,
    getActiveActivations,
    getNumberV2,
    getMultiServiceNumber,
    setStatus,
    getStatus,
    getPrices,
    getIncomingCallStatus,
    getAdditionalService,
    getExtraActivation,
    checkExtraActivation,
    createTaskForCall,
    getOutgoingCalls
  )
  this;
}
