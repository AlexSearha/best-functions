"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateString = void 0;
const truncateString = (sentence, maxwidth) => {
    if (sentence.length > maxwidth) {
        return sentence.split("").splice(0, maxwidth).join("") + "...";
    }
    return sentence;
};
exports.truncateString = truncateString;
