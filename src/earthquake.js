// input: earthquake intensity (Richter scale)
// output: damage description

export function earthquake(intensity) {

    if (intensity < 5) {
        return "Little or no damage";
    }
    else if (intensity < 5.5) {
        return "Some damage";
    }
    else if (intensity < 6.5) {
        return "Serious damage: walls may crack or fall";
    }
    else if (intensity < 7.5) {
        return "Disaster: houses may collapse";
    }
    else {
        return "Catastrophe: most buildings destroyed";
    }
}

// developer test
if (import.meta.main) {
    console.log(earthquake(4.2)); // 
    console.log(earthquake(5.2)); // 
    console.log(earthquake(6.0)); //
    console.log(earthquake(7.0)); // 
    console.log(earthquake(8.0)); 
}