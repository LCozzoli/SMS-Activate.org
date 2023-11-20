export const BASE_URL = `http://api.sms-activate.org/stubs/handler_api.php`;

export enum EApiActions {
  // Activations API
  getNumbersStatus,
  getTopCountriesByService,
  getBalance,
  getBalanceAndCashBack,
  getOperators,
  getActiveActivations,
  getNumber,
  getNumberV2,
  getMultiServiceNumber,
  setStatus,
  getStatus,
  getIncomingCallStatus,
  getPrices,
  // getCountries,
  getAdditionalService,
  getExtraActivation,
  checkExtraActivation,
  createTaskForCall,
  getOutgoingCalls,
  // Rental API
  getRentServicesAndCountries,
  getRentNumber,
  getRentStatus,
  setRentStatus,
  getRentList,
  continueRentNumber,
  getContinueRentPriceNumber,
}
