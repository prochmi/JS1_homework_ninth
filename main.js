const nastartujMinutku = (e) => {
    e.preventDefault()
    let time = Number(document.querySelector(".time-input").value)

    if (Number.isInteger(time) && (time > 0) && (time !== null)) {

        const alarmSekundy = document.querySelector(".alarm__seconds")
        const alarm = document.querySelector(".alarm")
        const audio = document.querySelector(".audio")
        alarmSekundy.textContent = String(time).padStart(2, "0")

        const odpocet = () => {
            if (time > 0) {

                time = (time- 1)
                alarmSekundy.textContent = String(time).padStart(2, "0")
            } else if (timeInput <= 0) {

                clearInterval(timerId)
                alarm.classList.add("alarm--ring")
                document.querySelector("audio").play()
            }
        }
        const timerId = setInterval(odpocet, 1000)

    } else {
        alert("Zadej celé kladné číslo!")
    }
}

const formular = document.querySelector(".controls")
formular.addEventListener("submit", (e) => nastartujMinutku(e))