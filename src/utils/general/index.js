export const getFixed = (number, digits = 2) => {
    let fixed = number.toFixed(digits)
    while (
        fixed.length > 1 &&
        fixed.includes('.') && (
            fixed[fixed.length - 1] === '0' ||
            fixed[fixed.length - 1] === '.'
        )
    ) {
        // Remove last character.
        fixed = fixed.slice(0, -1)
    }
    return fixed
}

export const join = (array = [], separator = '') => (
    array.filter(entry => (
        Boolean(entry) || Number.isFinite(entry)
    )).join(separator)
)
