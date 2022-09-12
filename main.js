const profession = document.querySelector(".profession")

function writer(text , counter) {

    if(counter < text.length){

        setTimeout(()=>{
            profession.textContent += text.charAt(counter)
            counter++

            writer(text,counter)
        }, 200)
    }
}

writer("Front-End Developer" , 0)

const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left")

        if(isLeft) {
            currentItem--
        } else {
            currentItem++
        }

        if(currentItem >= maxItems) {
            currentItem = 0
        }

        if(currentItem < 0) {
            currentItem = maxItems - 1
        }

        items.forEach(item =>
            item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })

        items[currentItem].classList.add("current-item")
    })
})