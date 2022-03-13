//our script code has been wrong so far! Now let's fix that!! 
//I you ready? let's go!
const dNone = document.querySelector('.d-none');
const iconright = document.querySelector('.fa-arrow-right');
const iconleft = document.querySelector('.fa-arrow-left');
const one = document.querySelector('.one'),
    two = document.querySelector('.two'),
    three = document.querySelector('.three'),
    four = document.querySelector('.four'),
    five = document.querySelector('.five'),
    six = document.querySelector('.six'),
    seven = document.querySelector('.seven'),
    eight = document.querySelector('.eight'),
    nine = document.querySelector('.nine'),
    ten = document.querySelector('.ten')

iconleft.style.display = "none"


iconleft.addEventListener("click", myFunction);

function myFunction() {
    const iconright = document.querySelector('.fa-arrow-right');
    var a = document.querySelector('.categoriess')

    const iconleft = document.querySelector('.fa-arrow-left');
    if (document.querySelector('.categoriess').style.transform = 'translateX(1%) ') {
        iconleft.style.display = "none"
        iconright.style.display = "grid"

    }
};

iconright.addEventListener("click", myFunctiontwo);

function myFunctiontwo() {
    const iconright = document.querySelector('.fa-arrow-right');
    const iconleft = document.querySelector('.fa-arrow-left');
    document.querySelector('.categoriess').style.transform = 'translateX(-55.9%)';
    iconleft.style.display = "grid"
    iconright.style.display = "none"

};

one.addEventListener("click", heart);

function heart() {
    one.style.color = "red"
    one.style.backgroundColor = "#f8f8f8"
    one.style.animationPlayState = "running"
}

two.addEventListener("click", heart2);


function heart2() {
    two.style.color = "red"
    two.style.backgroundColor = "#f8f8f8"
    two.style.animationPlayState = "running"
}

three.addEventListener("click", heart3);


function heart3() {
    three.style.color = "red"
    three.style.backgroundColor = "#f8f8f8"
    three.style.animationPlayState = "running"
}

four.addEventListener("click", heart4);


function heart4() {
    four.style.color = "red"
    four.style.backgroundColor = "#f8f8f8"
    four.style.animationPlayState = "running"
}

five.addEventListener("click", heart5);


function heart5() {
    five.style.color = "red"
    five.style.backgroundColor = "#f8f8f8"
    five.style.animationPlayState = "running"
}

six.addEventListener("click", heart6);

function heart6() {
    six.style.color = "red"
    six.style.backgroundColor = "#f8f8f8"
    six.style.animationPlayState = "running"
}

seven.addEventListener("click", heart7);


function heart7() {
    seven.style.color = "red"
    seven.style.backgroundColor = "#f8f8f8"
    seven.style.animationPlayState = "running"
}

eight.addEventListener("click", heart8);


function heart8() {
    eight.style.color = "red"
    eight.style.backgroundColor = "#f8f8f8"
    eight.style.animationPlayState = "running"
}

nine.addEventListener("click", heart9);

function heart9() {
    nine.style.color = "red"
    nine.style.backgroundColor = "#f8f8f8"
    nine.style.animationPlayState = "running"
}

ten.addEventListener("click", heart10);

function heart10() {
    ten.style.color = "red"
    ten.style.backgroundColor = "#f8f8f8"
    ten.style.animationPlayState = "running"
};

//function reklama() {
//    let reklama = document.querySelector('.reklama_container');
//    reklama.style.animationPlayState = "running"
//    reklama.style.backgroundColor = '#2021249f'
//    reklama.style.transition = '1s'
//    reklama.style.opacity = '1'
//    reklama.style.display = 'block'
//}
var heart = document.getElementsByClassName('fa-heart');
var heart10 = heart[10]
var heart11 = heart[11]
var heart12 = heart[12]
var heart13 = heart[13]
var heart14 = heart[14]
var heart15 = heart[15]
var heart16 = heart[16]
var heart17 = heart[17]
var heart18 = heart[18]
var heart19 = heart[19]
var heart20 = heart[20]

heart10.addEventListener("click", heart10f);
heart11.addEventListener("click", heart11f);
heart12.addEventListener("click", heart12f);
heart13.addEventListener("click", heart13f);
heart14.addEventListener("click", heart14f);
heart15.addEventListener("click", heart15f);
heart16.addEventListener("click", heart16f);
heart17.addEventListener("click", heart17f);
heart18.addEventListener("click", heart18f);
heart19.addEventListener("click", heart19f);
heart20.addEventListener("click", heart20f);

function heart10f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart10 = heart[10]
    heart10.style.color = "red"
    heart10.style.backgroundColor = "#f8f8f8"
    heart10.style.animationPlayState = "running"
}

function heart11f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart11 = heart[11]
    heart11.style.color = "red"
    heart11.style.backgroundColor = "#f8f8f8"
    heart11.style.animationPlayState = "running"
}

function heart12f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart12 = heart[12]
    heart12.style.color = "red"
    heart12.style.backgroundColor = "#f8f8f8"
    heart12.style.animationPlayState = "running"
}

function heart13f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart13 = heart[13]
    heart13.style.color = "red"
    heart13.style.backgroundColor = "#f8f8f8"
    heart13.style.animationPlayState = "running"
}

function heart14f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart14 = heart[14]
    heart14.style.color = "red"
    heart14.style.backgroundColor = "#f8f8f8"
    heart14.style.animationPlayState = "running"
}

function heart15f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart15 = heart[15]
    heart15.style.color = "red"
    heart15.style.backgroundColor = "#f8f8f8"
    heart15.style.animationPlayState = "running"
}

function heart16f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart16 = heart[16]
    heart16.style.color = "red"
    heart16.style.backgroundColor = "#f8f8f8"
    heart16.style.animationPlayState = "running"
}

function heart17f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart17 = heart[17]
    heart17.style.color = "red"
    heart17.style.backgroundColor = "#f8f8f8"
    heart17.style.animationPlayState = "running"
}

function heart18f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart18 = heart[18]
    heart18.style.color = "red"
    heart18.style.backgroundColor = "#f8f8f8"
    heart18.style.animationPlayState = "running"
}

function heart19f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart19 = heart[19]
    heart19.style.color = "red"
    heart19.style.backgroundColor = "#000"
    heart19.style.animationPlayState = "running"
}

function heart20f() {
    var heart = document.getElementsByClassName('fa-heart');
    var heart20 = heart[20]
    heart20.style.color = "red"
    heart20.style.backgroundColor = "#000"
    heart20.style.animationPlayState = "running"
}

function dimmer_1() {
    var x = document.querySelector('nav')
    document.querySelector('.ui_segment').style.backgroundColor = '#fff';
    document.querySelector('body').style.overflow = 'hidden';
    x.classList.remove('pointer_events')

}

function overflow() {
    var x = document.querySelector('nav')

    document.querySelector('body').style.overflow = 'scroll';
    x.classList.add('pointer_events')


}
console.clear('console tozalandi')
console.info('console tozalandi')