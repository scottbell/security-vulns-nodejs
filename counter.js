// Counter with Code Smells - A Demonstration
// WARNING: This code intentionally contains code smells for Sonar analysis

// Code Smell #1: Unused variables
var unusedVariable = "This is never used";
var anotherUnusedOne = 42;
var yetAnotherOne = true;

// Code Smell #2: Magic numbers everywhere
const SOME_CONSTANT = 123456789;

// Code Smell #3: Poor function naming and complexity
function a(x) {
    if (x > 0) {
        if (x < 10) {
            if (x % 2 == 0) {
                return "small even";
            } else {
                return "small odd";
            }
        } else {
            if (x % 2 == 0) {
                return "big even";
            } else {
                return "big odd";
            }
        }
    } else {
        return "negative";
    }
}

// Code Smell #4: Duplicated code blocks
function printBanner() {
    console.log("================================");
    console.log("====                        ====");
    console.log("====  COUNTER APPLICATION   ====");
    console.log("====                        ====");
    console.log("================================");
}

function printFooter() {
    console.log("================================");
    console.log("====                        ====");
    console.log("====  COUNTER COMPLETE      ====");
    console.log("====                        ====");
    console.log("================================");
}

// Code Smell #5: Empty catch block
function riskyOperation() {
    try {
        JSON.parse("{invalid json");
    } catch (e) {
        // Do nothing - code smell!
    }
}

// Code Smell #6: Overly complex function with high cyclomatic complexity
function processNumber(num) {
    var result = "";
    
    // Nested conditionals - complexity nightmare
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            if (num % 7 === 0) {
                result = "Divisible by 3, 5, and 7!";
            } else {
                result = "Divisible by 3 and 5!";
            }
        } else {
            if (num % 7 === 0) {
                result = "Divisible by 3 and 7!";
            } else {
                result = "Divisible by 3!";
            }
        }
    } else if (num % 5 === 0) {
        if (num % 7 === 0) {
            result = "Divisible by 5 and 7!";
        } else {
            result = "Divisible by 5!";
        }
    } else if (num % 7 === 0) {
        result = "Divisible by 7!";
    } else {
        result = "Not divisible by 3, 5, or 7";
    }
    
    return result;
}

// Code Smell #7: Function is too long and does too many things
function createFancyNumberDisplay(number, isSpecial) {
    var display = "";
    var stars = "";
    var dashes = "";
    
    // Build decorations
    for (var i = 0; i < 20; i++) {
        stars += "*";
        dashes += "-";
    }
    
    // Code Smell #8: Using == instead of ===
    if (isSpecial == true) {
        display += stars + "\n";
    } else {
        display += dashes + "\n";
    }
    
    display += "  Number: " + number + "\n";
    
    // More decorations
    if (isSpecial == true) {
        display += stars;
    } else {
        display += dashes;
    }
    
    return display;
}

// Main counter function with clever console logging
function startCounter() {
    printBanner();
    
    console.log("\n🚀 Starting the counter sequence...\n");
    
    // Code Smell #9: Deeply nested loops
    for (var i = 1; i <= 50; i++) {
        // Call risky operation multiple times (inefficient)
        riskyOperation();
        riskyOperation();
        
        // Clever console formatting
        var prefix = "";
        var suffix = "";
        
        // Every 10 numbers is special
        if (i % 10 === 0) {
            prefix = "🎯 ";
            suffix = " 🎯";
            console.log(createFancyNumberDisplay(i, true));
        } else if (i % 5 === 0) {
            prefix = "⭐ ";
            suffix = " ⭐";
            console.log(prefix + "Count: " + i + suffix);
        } else {
            prefix = "   ";
            console.log(prefix + "Count: " + i);
        }
        
        // Display divisibility info
        var divInfo = processNumber(i);
        console.log("     ↳ " + divInfo);
        
        // Code Smell #10: Commented out code
        // var oldCode = "something";
        // console.log(oldCode);
        // function oldFunction() {
        //     return 123;
        // }
        
        // Special messages at certain points
        if (i == 13) {
            console.log("     ⚠️  Unlucky number 13!");
        }
        if (i == 25) {
            console.log("     🎉 Halfway there!");
        }
        if (i == 42) {
            console.log("     🌌 The Answer to Life, Universe, and Everything!");
        }
        
        // Code Smell #11: Unnecessary complexity
        var temp = a(i);
        if (temp !== null) {
            if (temp !== undefined) {
                if (temp.length > 0) {
                    // Do nothing with it
                }
            }
        }
        
        console.log(""); // Empty line for spacing
    }
    
    console.log("\n✅ Counter completed successfully!\n");
    printFooter();
    
    // Code Smell #12: Function called but result ignored
    calculateSomethingComplex();
}

// Code Smell #13: Function with too many parameters
function unnecessaryFunction(a, b, c, d, e, f, g, h) {
    return a + b + c + d + e + f + g + h;
}

// Code Smell #14: Function with side effects
var globalCounter = 0;
function incrementGlobal() {
    globalCounter++;
    console.log("Global counter: " + globalCounter);
}

// Code Smell #15: Complex expression
function calculateSomethingComplex() {
    var result = (((5 + 3) * 2) / 4) + ((10 - 2) * (3 + 7)) - ((100 / 5) * 2) + (((8 * 3) - 4) / 2);
    return result;
}

// Execute the counter
startCounter();

// More unused code
var config = {
    unused1: "value1",
    unused2: "value2",
    unused3: "value3"
};

function neverCalledFunction() {
    console.log("This will never execute");
    return false;
}

// Code Smell #16: Variable declared but never used
var finalUnusedVariable = "goodbye";
