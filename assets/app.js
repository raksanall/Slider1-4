const previous = document.getElementById("previous")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")


let currentActive = 1;

next.onclick = (() => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})


previous.onclick = (() => {
    currentActive--
    
    if (currentActive < 1) {
        currentActive = 1
    }
    
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active")
        }
        else {
            circle.classList.remove("active")
        }
    })

    if(currentActive === 1){
        previous.disabled = true
    }else {
        previous.disabled = false
    }

    if(currentActive === circles.length){
        next.disabled = true;
    }else {
        next.disabled = false;
    }
}
