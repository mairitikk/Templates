//form


/*const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");

c
//============== Next Form===============
function nextOne() {
    form1.style.left = "-450px";
    form2.style.left = "25px";
    //next slide
    increamentNumber();
    // update progress bar
    update();
}
//=============== Back One==================
function backOne() {
    form1.style.left = "25px";
    form2.style.left = "450px";
    // back slide
    decreametNumber();
    // update progress bar
    update();
}
//============ Second Form=============
function nextTwo() {
    form2.style.left = "-450px";
    form3.style.left = "25px";
    //next slide
    increamentNumber();
    // update progress bar
    update();
}
//=============== Back One==================
function backTwo() {
    form2.style.left = "25px";
    form3.style.left = "450px";
    // back slide
    decreametNumber();
    // update progress bar
    update();
}

//================== Increament Number===============
function increamentNumber() {
    // next progress number
    currectActive++;
    if (currectActive > circles.length) {
        currectActive = circles.length;
    }
}
//================ Decreament Number=================
function decreametNumber() {
    currectActive--;
    if (currectActive < 1) {
        currectActive = 1;
    }
}
//================= btn Events===================
const btnsEvents = () => {
    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const back1 = document.getElementById("back1");
    const back2 = document.getElementById("back2");
    //next1
    next1.addEventListener("click", nextOne);
    // back1
    back1.addEventListener("click", backOne);
    //next 2
    next2.addEventListener("click", nextTwo);
    // back 2
    back2.addEventListener("click", backTwo);
};
document.addEventListener("DOMContentLoaded", btnsEvents);




//progress bar


const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle1');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})
function update() {
    circles.forEach((circle1, idx) => {
        if (idx < currentActive) {
            circle1.classList.add('active')
            // document.getElementById('nombre-'+idx)
        }
        else {
            circle1.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')


    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

*/

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const progressEl = document.getElementById("progress");
const circles = document.querySelectorAll(".circle1");
let currectActive = 1;
//============== Next Form===============
function nextOne() {
    form1.style.left = "-1500px";
    form2.style.left = "25px";
    //next slide
    increamentNumber();
    // update progress bar
    update();
}
//=============== Back One==================
function backOne() {
    form1.style.left = "25px";
    form2.style.left = "1500px";
    // back slide
    decreametNumber();
    // update progress bar
    update();
}
//============ Second Form=============
function nextTwo() {
    form2.style.left = "-1500px";
    form3.style.left = "25px";
    //next slide
    increamentNumber();
    // update progress bar
    update();
}
//=============== Back One==================
function backTwo() {
    form2.style.left = "25px";
    form3.style.left = "1500px";
    // back slide
    decreametNumber();
    // update progress bar
    update();
}
//============= Progress update====================
function update() {
    circles.forEach((circle1, indx) => {
        if (indx < currectActive) {
            circle1.classList.add("active");
        } else {
            circle1.classList.remove("active");
        }
        // get all of active classes
        const actives = document.querySelectorAll(".active");
        progressEl.style.width =
            ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    });
}
//================== Increament Number===============
function increamentNumber() {
    // next progress number
    currectActive++;
    if (currectActive > circles.length) {
        currectActive = circles.length;
    }
}
//================ Decreament Number=================
function decreametNumber() {
    currectActive--;
    if (currectActive < 1) {
        currectActive = 1;
    }
}
//================= btn Events===================
const btnsEvents = () => {
    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const back1 = document.getElementById("back1");
    const back2 = document.getElementById("back2");
    //next1
    next1.addEventListener("click", nextOne);
    // back1
    back1.addEventListener("click", backOne);
    //next 2
    next2.addEventListener("click", nextTwo);
    // back 2
    back2.addEventListener("click", backTwo);
};
document.addEventListener("DOMContentLoaded", btnsEvents);

