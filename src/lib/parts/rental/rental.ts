import { use } from 'typescript-mix';
import { continueRentNumber } from './routes/continueRentNumber';
import { getContinueRentPriceNumber } from './routes/getContinueRentPriceNumber';
import { getRentList } from './routes/getRentList';
import { getRentNumber } from './routes/getRentNumber';
import { getRentServicesAndCountries } from './routes/getRentServicesAndCountries';
import { getRentStatus } from './routes/getRentStatus';
import { setRentStatus } from './routes/setRentStatus';

export interface Rental
  extends getRentServicesAndCountries,
    getRentNumber,
    getRentStatus,
    setRentStatus,
    getRentList,
    continueRentNumber,
    getContinueRentPriceNumber {}

export class Rental {
  @use(
    getRentServicesAndCountries,
    getRentNumber,
    getRentStatus,
    setRentStatus,
    getRentList,
    continueRentNumber,
    getContinueRentPriceNumber
  )
  this;
}
