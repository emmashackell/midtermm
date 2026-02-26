// input: number of each coin
// output: total value in dollars

export function coins(nickels, dimes, quarters, loonies, toonies) {

    const NICKEL = 0.05;
    const DIME = 0.10;
    const QUARTER = 0.25;
    const LOONIE = 1.00;
    const TOONIE = 2.00;

    let total =
        nickels * NICKEL +
        dimes * DIME +
        quarters * QUARTER +
        loonies * LOONIE +
        toonies * TOONIE;
    return total;
}

// developer test
if (import.meta.main) {
    console.log(coins(1, 1, 1, 1, 1)); // should be 3.40
}