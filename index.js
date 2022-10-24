let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", myfunc)


function myfunc() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let firstEmoji = Math.floor(Math.random() * fighters.length)
    let newfirstEmoji = fighters[firstEmoji]
    let secondEmoji = Math.floor(Math.random() * fighters.length)
    let newsecondEmoji = fighters[secondEmoji]
    stageEl.textContent = newfirstEmoji + "vs" + newsecondEmoji
    
}

