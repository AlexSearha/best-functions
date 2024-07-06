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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGeneric = exports.truncateString = void 0;
const truncateString = (sentence, maxwidth) => {
    if (sentence.length > maxwidth) {
        return sentence.split('').splice(0, maxwidth).join('') + '...';
    }
    return sentence;
};
exports.truncateString = truncateString;
const fetchGeneric = (url_1, ...args_1) => __awaiter(void 0, [url_1, ...args_1], void 0, function* (url, method = 'GET', body = null) {
    try {
        const options = {
            method: method,
            headers: {},
            body: body instanceof FormData ? body : JSON.stringify(body),
        };
        const response = yield fetch(url, options);
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
exports.fetchGeneric = fetchGeneric;
