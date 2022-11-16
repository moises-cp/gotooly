"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeInlineStyles = void 0;
const removeInlineStyles = (str) => {
    if (!str || typeof str !== 'string') {
        return null;
    }
    const patternInlineStyles = /(?<=style=").*?(?=")/g;
    return str.replaceAll(patternInlineStyles, '')
        .replaceAll(' style=""', '');
};
exports.removeInlineStyles = removeInlineStyles;
//# sourceMappingURL=index.js.map