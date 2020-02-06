var firebaseConfig = {
    apiKey: "AIzaSyBaiAjelILaOkgUkYLO6oPJDfBBJovHCxw",
    authDomain: "messagehandler-14c02.firebaseapp.com",
    databaseURL: "https://messagehandler-14c02.firebaseio.com",
    projectId: "messagehandler-14c02",
    storageBucket: "messagehandler-14c02.appspot.com",
    messagingSenderId: "100237136426",
    appId: "1:100237136426:web:9b6002f9bb9a85b2006953"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split('');
text.textContent = "";

splitText.forEach((_text, index) => {
    text.innerHTML += `<span>${_text}</span>`
})

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if (char == splitText.length) {
        complete();
        return
    }
}

function complete() {
    clearInterval(timer)
    timer = null
    effect1()
}

let char = 0;
let timer = setInterval(onTick, 50)




function effect1() {
    let a = document.getElementsByClassName("surname");
    a[0].style.opacity = 1
    const text1 = document.querySelector('.fancy1');
    const strText1 = text1.textContent;
    const splitText1 = strText1.split('');
    text1.textContent = "";

    splitText1.forEach((_text, index) => {
        text1.innerHTML += `<span>${_text}</span>`
    })

    function onTick1() {
        const span = text1.querySelectorAll('span')[char1];
        span.classList.add('fade')
        char1++
        if (char1 == splitText1.length) {
            complete1();
            return
        }
    }

    function complete1() {
        clearInterval(timer1)
        timer1 = null
        effect2()
    }

    let char1 = 0;
    let timer1 = setInterval(onTick1, 50)
}

function effect2() {
    let a = document.getElementsByClassName("developer");
    a[0].style.opacity = 1
    const text2 = document.querySelector('.fancy2');
    const strText2 = text2.textContent;
    const splitText2 = strText2.split('');
    text2.textContent = "";

    splitText2.forEach((_text, index) => {
        text2.innerHTML += `<span>${_text}</span>`
    })

    function onTick2() {
        const span = text2.querySelectorAll('span')[char2];
        span.classList.add('fade')
        char2++
        if (char2 == splitText2.length) {
            complete2();
            return
        }
    }

    function complete2() {
        clearInterval(timer2)
        timer2 = null
    }

    let char2 = 0;
    let timer2 = setInterval(onTick2, 50)
}


//! Anchor animation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ! NavBar

const sections = document.querySelectorAll('.sections');
const bubble = document.querySelector('.bubble');

const options = {
    threshold: 0.5,
}

let observer = new IntersectionObserver(navCheck, options)

function navCheck(entries) {
    entries.forEach(entry => {
        let className = entry.target.className;
        className = className.substr(0, className.indexOf(" "))
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const cords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: cords.height,
            width: cords.width,
            top: cords.top,
            left: cords.left
        }
        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty(`border-radius`, `${20}px`)
        }
    })
}


window.addEventListener('scroll', () => {
    if (document.querySelector("#header").getBoundingClientRect().y == 0) {
        sections.forEach(section => {
            observer.observe(section)
        })
    }
})


let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
})

function form(e) {
    e.preventDefault()
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        email.style.color = '#595f6e';
        sendEmail(email.value, name.value, message.value)
    } else {
        email.style.color = 'red'
    }
}


if (window.screen.width <= '800') {
    let lis = document.getElementsByClassName('header__menu')
    lis = [].concat(...lis)
    lis.forEach(li => {
        li.style.display = 'none'
    })
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            observer1.observe(section)
        })
    })
}


const options1 = {
    threshold: 0.6,
}

let observer1 = new IntersectionObserver(navCheck1, options1)

function navCheck1(entries) {
    if (entries.length = 1) {
        entries.forEach(entry => {
            let lis = document.getElementsByClassName('header__menu')
            lis = [].concat(...lis)
            lis.forEach(li => {
                li.style.display = 'none'
            })
            let className = entry.target.className;
            className = className.substr(0, className.indexOf(" "))
            const activeAnchor = document.querySelector(`[data-page=${className}]`)
            activeAnchor.style.display = 'inline-block'
            const cords = activeAnchor.getBoundingClientRect();
            const directions = {
                height: cords.height,
                width: cords.width,
                top: cords.top,
                left: cords.left
            }
            if (entry.isIntersecting) {
                bubble.style.setProperty('left', `${directions.left}px`);
                bubble.style.setProperty('top', `${directions.top}px`);
                bubble.style.setProperty('height', `${directions.height}px`);
                bubble.style.setProperty('width', `${directions.width}px`);
                bubble.style.setProperty(`border-radius`, `${20}px`)
            }
        })
    }
}

function sendEmail(email, name, message) {
    firebase
        .firestore()
        .collection('data')
        .add(
            {
                email,
                name,
                message
            }
        )
}