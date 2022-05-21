//#Task 1

const countDays = (target = 100, daySpeed = 50, nightSpeed = 30) => {
    const speedDiffirence = daySpeed - nightSpeed

    if (speedDiffirence < 0) return 0

    let countedDays = 0
    for (
        let currentDistance = 0;
        currentDistance <= target;
        currentDistance += speedDiffirence
    ) {
        countedDays++
        console.log(countedDays, currentDistance)
    }
    return countedDays - 1
}

console.log("task 1: ", countDays(100, 50, 30))

//#Task 2

const countHandshakes = () => {
    let handshakes = 0
    for (let people = 1; people <= 10; people++) {
        handshakes += people - 1
    }
    return handshakes
}

console.log("task 2: ", countHandshakes())
//#Task 3
const reapeatedWords =
    "банан,апельсин,мандарин,банан,апельсин,мандарин,банан,апельсин,мандарин,банан,апельсин,мандарин"

const removeReapeatedWords = (string) =>
    [...new Set([...string.split(",")])].toString()
console.log("task 3: ", removeReapeatedWords(reapeatedWords))
