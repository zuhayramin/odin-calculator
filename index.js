let display = document.querySelector(".display")
let equals = document
    .querySelector(".equals-sign")
    .addEventListener("click", finalResult)
let firstNumStatus = true
let firstNum = ""
let secondNumStatus = false
let secondNum = ""
let operator

let numberButton = document.querySelectorAll(".num-btn").forEach((num) => {
    num.addEventListener("click", function () {
        if (firstNumStatus) {
            firstNum += num.innerText
            console.log(firstNum)
        } else if (secondNumStatus) {
            secondNum += num.innerText
            console.log(secondNum)
        }
    })
})

let signButton = document.querySelectorAll(".sign-btn").forEach((sign) => {
    sign.addEventListener("click", function () {
        operator = sign.innerText
        firstNumStatus = false
        secondNumStatus = true
        console.log(operator)
    })
})
