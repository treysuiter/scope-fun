// console.log("Get'n all woo hoo")

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// // let y = 1

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     return conjoinedWord
// }

// console.log(conjunction("Master", "Card"))
// console.log(conjoinedWord)


// const ModSquad = {
//     "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         "series": {
//         "start": "1968",
//         "end": "1973"
//     }
// }

// let HTMLRepresentation = `<h1>The Mod Squad</h1>`

// ModSquad.members.forEach (member => {
//     HTMLRepresentation += `<div>${member}</div>`
// })


// document.querySelector(".show-info").innerHTML = HTMLRepresentation

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3], [3,0]]

let invalidLocation = false

let invalidCount = 0

for (let k = 0; k < locations.length; k++) {
   
    let currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        invalidCount++
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidCount} invalid locations`)

const testArray = [1, 2][0]

console.log(testArray)