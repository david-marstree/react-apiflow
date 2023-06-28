"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apiflow = exports.ApiflowContext = void 0;
const react_1 = __importDefault(require("react"));
const model_1 = require("./model");
exports.ApiflowContext = react_1.default.createContext({
    apiRequest: (apiId) => Promise.resolve(null),
});
const Apiflow = ({ children, token }) => {
    const callRequest = react_1.default.useCallback((apiId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield (0, model_1.apiRequest)({ apiId, token });
    }), [token]);
    return (react_1.default.createElement(exports.ApiflowContext.Provider, { value: { apiRequest: callRequest } }, children));
};
exports.Apiflow = Apiflow;
