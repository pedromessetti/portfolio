//Writing Front-End Developer in the Home Page

const profession = document.querySelector(".profession")

function writer(variable, text , counter) {

    if(counter < text.length){

        setTimeout(()=>{
            variable.textContent += text.charAt(counter)
            counter++

            writer(variable, text,counter)
        }, 200)
    }
}

writer(profession, "Front-End Developer" , 0)


//My Projects Gallery


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


//Show content of the Professional Skills


const skills = document.querySelectorAll('.skill')
const title = document.getElementById('title-skills')
const progressBar = document.querySelector('.progress-bar')
const level = document.querySelector('.interior')
const percentage = ['93%', '87%', '81%', '76%', '56%', '45%', '84%', '74%', '63%']
const percentageP = document.querySelector('.percentage')

for(let counter = 0; counter < skills.length; counter++) {
    const skill = skills[counter];
    const skillPercentage = percentage[counter]

    skill.onmouseover = function () {
        changeTitle(skillPercentage)
        level.setAttribute("style", `width: ${skillPercentage}`)
    }
    
    skill.onmouseout = function () {
        normalTitle()
    }
}

function changeTitle(skillPercentage) {
    title.innerHTML = "Skill Level"
    progressBar.style.visibility = "visible"
    percentageP.style.visibility = "visible"
    percentageP.innerHTML = `${skillPercentage}`

}

function normalTitle() {
    title.innerHTML = "Professionals Skills"
    progressBar.style.visibility = "hidden"
    percentageP.style.visibility = "hidden"
}


//Open and close Pong Same


const openPong = document.getElementById("open-pong")
const background = document.querySelector(".skills")
const pongGame = document.getElementById("pong-game")
const closeButton = document.getElementById("close-button")

openPong.addEventListener("click", showPong)
closeButton.addEventListener("click", closePong)

function showPong() {
    closeButton.style.display = 'block'
    pongGame.style.display = 'block'
    background.style.height = '175vh'
    openPong.innerText = 'Now click on the game and play using "W" to go up and "S" to go down'
}

function closePong() {
    closeButton.style.display = 'none'
    pongGame.style.display = 'none'
    background.style.height = '100vh'
    openPong.innerText = '* Click here for play one of the most classic games ever'
}
