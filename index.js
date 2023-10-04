let bottomDisplay = document.querySelector(".bottom-display")
let firstNumStatus = true
let firstNum = ""
let secondNumStatus = false
let secondNum = ""
let operator

let numberButton = document.querySelectorAll(".num-btn").forEach((num) => {
    num.addEventListener("click", function () {
        if (firstNumStatus) {
            firstNum += num.textContent
            bottomDisplay.innerText = firstNum
            console.log(firstNum)
        } else if (secondNumStatus) {
            secondNum += num.textContent
            bottomDisplay.innerText = secondNum
            console.log(secondNum)
        }
    })
})

let signButton = document.querySelectorAll(".sign-btn").forEach((sign) => {
    sign.addEventListener("click", function () {
        operator = sign.textContent
        firstNumStatus = false
        secondNumStatus = true
        console.log(operator)
    })
})

let equals = document.querySelector(".equal-sign")

equals.addEventListener("click", function () {
    firstNumStatus = false
    secondNumStatus = false
    console.log(`The final expression is: ${firstNum} ${operator} ${secondNum}`)
    console.log(typeof operator)
})
