// input: temperature in Farenheit
// output: temperature in Celcius

export function farenheitToCelcius(f) {
    let c = (f - 32) * 5 / 9;
    return c;
}

// developer test
if (import.meta.main) {
    console.log(farenheitToCelcius(32)); // 0
    console.log(farenheitToCelcius(212)); // 100
    console.log(farenheitToCelcius(70)); // about 21.11
}