"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
const typescript_mix_1 = require("typescript-mix");
const continueRentNumber_1 = require("./routes/continueRentNumber");
const getContinueRentPriceNumber_1 = require("./routes/getContinueRentPriceNumber");
const getRentList_1 = require("./routes/getRentList");
const getRentNumber_1 = require("./routes/getRentNumber");
const getRentServicesAndCountries_1 = require("./routes/getRentServicesAndCountries");
const getRentStatus_1 = require("./routes/getRentStatus");
const setRentStatus_1 = require("./routes/setRentStatus");
class Rental {
}
exports.Rental = Rental;
__decorate([
    (0, typescript_mix_1.use)(getRentServicesAndCountries_1.getRentServicesAndCountries, getRentNumber_1.getRentNumber, getRentStatus_1.getRentStatus, setRentStatus_1.setRentStatus, getRentList_1.getRentList, continueRentNumber_1.continueRentNumber, getContinueRentPriceNumber_1.getContinueRentPriceNumber),
    __metadata("design:type", Object)
], Rental.prototype, "this", void 0);
//# sourceMappingURL=rental.js.map