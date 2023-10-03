let display = document.querySelector(".display")
let firstNumStatus = true
let firstNum = ""
let secondNumStatus = false
let secondNum = ""
let operator

let numberButton = document.querySelectorAll(".num-btn").forEach((num) => {
    num.addEventListener("click", function () {
        if (firstNumStatus) {
            firstNum += num.textContent
            display.innerText = firstNum
            console.log(firstNum)
        } else if (secondNumStatus) {
            secondNum += num.textContent
            display.innerText = firstNum
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
    console.log(`The final expression is: ${firstNum} ${operator} ${secondNum}`)
    console.log(typeof operator)
})
