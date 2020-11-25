import accounting from "accounting";

const DEFAULT_FORMAT_OPTIONS = {
    symbol: "$",
    precision: 2,
    format: {
        pos: "%s%v",
        neg: "-%s%v",
        zero: "%s%v",
    },
};

export default function formatPrice(value, options = {}) {
    options = options || {};
    const customOptions = {
        ...DEFAULT_FORMAT_OPTIONS,
        ...options,
        format: { ...DEFAULT_FORMAT_OPTIONS.format, ...options.format },
    };

    return accounting.formatMoney(value, customOptions);
}
