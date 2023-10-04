let bottomDisplay = document.querySelector(".bottom-display")
let topDisplay = document.querySelector(".top-display")
let firstNumStatus = true
let firstNum = ""
let secondNumStatus = false
let secondNum = ""
let operator
let operatorCount = 0
let result
let clearButton = document
    .querySelector(".clear-btn")
    .addEventListener("click", function () {
        firstNumStatus = true
        firstNum = ""
        secondNumStatus = false
        secondNum = ""
        operatorCount = 0
        topDisplay.textContent = ""
        bottomDisplay.textContent = ""
    })

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
        if (operatorCount > 0) {
            topDisplay.innerText += secondNum
            getCalculation()
            firstNum = result
            operator = sign.textContent
            topDisplay.innerText = firstNum + " " + operator
            secondNumStatus = true
            secondNum = ""
            return
        }

        operator = sign.textContent
        operatorCount += 1
        firstNumStatus = false
        secondNumStatus = true
        console.log(operator)

        topDisplay.innerText = firstNum
        bottomDisplay.innerText = ""
        topDisplay.innerText += " " + operator
    })
})

let equals = document.querySelector(".equal-sign")

function getCalculation() {
    if (firstNum === "") {
        topDisplay.textContent = ""
        bottomDisplay.textContent = "Error"
        return
    }
    firstNumStatus = false
    secondNumStatus = false
    topDisplay.innerText = firstNum + " " + operator + " " + secondNum
    console.log(`The final expression is: ${firstNum} ${operator} ${secondNum}`)

    result = calculation()
    bottomDisplay.innerText = result
}

equals.addEventListener("click", getCalculation)

function calculation() {
    let num1 = parseInt(firstNum)
    let num2 = parseInt(secondNum)

    if (operator === "+") return num1 + num2
    if (operator === "-") return num1 - num2
    if (operator === "*") return num1 * num2
    if (operator === "/" && num2 === 0) return "Infinity"
    if (operator === "/") return (num1 / num2).toFixed(2)
}
