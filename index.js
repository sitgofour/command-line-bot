const { futimes } = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });


console.log("hi there, I'm node bot!");

rl.on('line', (input) => {
    if(input === "fruit") {
        engageFruit();
    } else {
        console.log("i dont understand that input");
    }
})


function engageFruit() {
    rl.question("what's your favorite fruit?\n", (userResponse) => {
        const fruits = {
            "apples": ["i love apples too", "i like some apples, but not green ones", "i like them too, apple pie is my favorite"],
            "oranges": ["i don't really like oranges", "nothing better than an orange", "orange juice rocks my socks!"],
            "bananas": ["bananas are yum yum", "they great unless they get mushy", "banana sundae please"],
            "not found": ["are you sure that's a fruit, i've never heard of it", "Is that a real fruit??", "Is that really a fruit, sure you spelled it right?"]
        }
    
        try {
            if(fruits[userResponse]) {
                let randIndex = Math.floor(Math.random() * fruits[userResponse].length);
                console.log(fruits[userResponse][randIndex]);
            } else {
                let randIndex = Math.floor(Math.random() * fruits["not found"].length);
                console.log(fruits["not found"][randIndex]);
            }
        }
        catch(e) {
            console.log(e);
        }
        finally {
            rl.close();
            process.exit(0);
        }
    
    });
}




