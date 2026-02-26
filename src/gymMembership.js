// input: base cost and number of friends
// Output: total cost after discount

export function gymMembership(cost, friends) {

    let discount = 0;

    if (friends ===1) {
        discount = 0.05;
    }
    else if (friends === 2) {
        discount = 0.10;
    }
    else if (friends === 3) {
        discount = 0.15;
    }
    let total = cost * (1 - discount);
    return total;
}

// developer test
if (import.meta.main) {
    console.log(gymMembership(100, 0)); // should be 100
    console.log(gymMembership(100, 1)); // should be 95
    console.log(gymMembership(100, 2)); // should be 90
    console.log(gymMembership(100, 3)); // should be 85
    }