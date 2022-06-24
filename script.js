//TODO: randomly choose computer choice
//TODO: randomly select from  r, p, or s (maybe an array?)
//TODO: store in variable 
//TODO: collect users choice (R,P,S)
//TODO: ask user for r,p,or s via popup
//TODO: EDGE CASE: user doenst pick r,p or s
//TODO: figure out result
//TODO: win: r:s, p:r, s:p
//TODO: loss: s:r, r:p, p:s
//TODO: tie s:s, r:r, p:p
//TODO: Log stats
//TODO: craete variables for win, loss, and tie
//TODO: update appropriate variable based on result
//TODO: display to user
//Keep playing until quit
    
var choices = ["r","p","s"]
var randChoice = choices[Math.floor(Math.random()*choices.length)]
var boolVar = true
var totalWins = 0
var totalLosses = 0
var totalTies = 0

while (boolVar) {
    var userChoice = prompt("Hello! Lets play Rock, Paper, Scissors. Please make a selection (r, p or s): ");
    if (userChoice === "r" && randChoice === "s" || userChoice === "s" && randChoice === "p" || userChoice === "p" && randChoice === "r") {
        var totalWins = totalWins + 1
        var youWon = alert("You Won!!");
        } else if (userChoice === "s" && randChoice === "r" || userChoice === "p" && randChoice === "s" || userChoice === "r" && randChoice === "p") {
            var totalLosses = totalLosses + 1
            var youLost = alert("You Lost!!");
            } else if (userChoice === "r" && randChoice === "r" || userChoice === "s" && randChoice === "s" || userChoice === "p" && randChoice === "p") {
                var totalTies = totalTies + 1
                var youTied = alert("You Tied!!");
            } else {
                var invalid = alert("Invalid Response: That's an auto-loss :(");
                var totalLosses = totalLosses + 1
            }

    alert(`Here are your stats:\nWins: ${totalWins}\nLosses: ${totalLosses}\nTies: ${totalTies}`);

    if (confirm("Would you like to play again?")) {
        boolVar = true
    } else {
        boolVar = false
    }
}

window.close();
















// var randomNum  = Math.random()
// console.log(randomNum)
// var numTimesLength = randomNum * names.length
// console.log(numTimesLength)
// var roundDown = Math.floor(numTimesLength)
// console.log(roundDown)
