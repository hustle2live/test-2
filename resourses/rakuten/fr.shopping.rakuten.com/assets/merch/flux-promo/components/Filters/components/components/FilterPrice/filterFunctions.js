const REGEX_NUM = /\d*([.,]\d{0,2})?/g;

export function formateNumber(num) {
    if (num.length === 0) {
        return '';
    }

    const num2 = num.replace('-', '').replace(',', '.');
    const val = num2.startsWith('.') ? `0${num2}` : num2;
    const numDecimal = parseFloat(Math.round(val * 100) / 100);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(numDecimal)) {
        return '';
    }
    return `${numDecimal >= 1000000 ? 999999 : numDecimal}`;
}

export function keyIsValid(event) {
    const keyCode = event.keyCode || event.which;
    const value = `${event.target.value || ''}${String.fromCharCode(keyCode)}`;

    const regex = new RegExp(REGEX_NUM);
    const r = regex.exec(value);
    if (!r || r.index || regex.lastIndex !== value.length) {
        event.preventDefault();
    }
}