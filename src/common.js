export function round_to_decimal(value, decimal = 2) {
    return Math.round(value * (10 ** decimal)) / (10 ** decimal)
}
