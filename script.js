const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function showResults() {

    season = document.querySelector('input[name = "season"]:checked').value;
    color = document.querySelector('input[name = "color"]:checked').value;
    item = document.querySelector('input[name = "item"]:checked').value;
    drink = document.querySelector('input[name = "drink"]:checked').value;
    flowers = document.querySelector('input[name = "flowers"]:checked').value;

    willow = 0;
    hazel = 0;
    june = 0;

    function eachscore(x) {
        if (x == "willow") {
            willow = willow + 1
        }
        if (x == "hazel") {
            hazel = hazel + 1
        }
        if (x == "june") {
            june = june + 1
        }
    }

    console.log(eachscore);

    eachscore(eval("season"));
    eachscore(eval("color"));
    eachscore(eval("item"));
    eachscore(eval("drink"));
    eachscore(eval("flowers"));

    all = [willow, hazel, june];

    console.log(all);

    maxscore = Math.max.apply(Math, all);
    console.log(maxscore);

    scores = [{
            index: 0,
            feedback: "Willow"
        },
        {
            index: 1,
            feedback: "Hazel"
        },
        {
            index: 2,
            feedback: "Juniper"
        }
    ];

    console.log(scores);

    let winners = []

    for (i = 0; i < all.length; i++) {
        if (all[i] == maxscore) {
            let winner = scores[i].feedback
            winners.push(winner)
            localStorage.setItem('ganador', winner)
            const ganadores = localStorage.getItem('ganador')
            console.log(ganadores);
        }
    }

    
    if (winners == 'Willow') {
        Swal.fire({
            title: 'Congrats!',
            text: 'You are Willow',
            imageUrl: 'https://64.media.tumblr.com/97e12e6afa755ee09ca87b89526dd9a5/a634737d40c74cdd-fa/s1280x1920/960114ef1b281ba52abd3190efe1c7cc9d66e31a.jpg',
            imageHeight: 300,
            imageAlt: 'Willow',
        })
    } else if (winners == 'Hazel') {
        Swal.fire({
            title: 'Congrats!',
            text: 'You are Hazel',
            imageUrl: 'https://glittermagazine.co/wp-content/uploads/2020/10/cfb2b2457305f5e6afe3023a9cc3879c.png',
            imageHeight: 300,
            imageAlt: 'Hazel',
        })
    } else if (winners == 'Juniper') {
        Swal.fire({
            title: 'Congrats!',
            text: 'You are Juniper',
            imageUrl: 'https://64.media.tumblr.com/15c5027619150ba2e645f6e019813134/tumblr_pk4hn4cgfB1slaih9_1280.jpg',
            imageHeight: 300,
            imageAlt: 'Juniper',
        })
    }

    return false;

}


function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
        restartButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        previousButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function restartSlide() {
    showSlide(newSlide = 0);
    document.getElementById("results").innerHTML = '';
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}


// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const restartButton = document.getElementById("restart");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

showSlide(currentSlide);

// on submit, show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
restartButton.addEventListener("click", restartSlide)


//fetch

async function getChars() {
    const URL = '/data.json'
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data);

    data.forEach(e => {
        console.log(e.title);
    })


    let datos = {
        'images': [{
                'imageUrl': "/images/willow.jpg"
            },
            {
                'imageUrl': "/images/hazel.png"
            },
            {
                'imageUrl': "/images/juniper.jpg"
            }
        ]
    }

    datos.images.forEach(function (obj) {
        let img = new Image()
        img.src = obj.imageUrl;
        img.setAttribute('id', 'imagen')
        img.setAttribute('height', '250px')
        img.style.opacity = 0.6
        img.onmouseout = () => {
            img.style.opacity = 0.6
        }
        img.onmouseover = () => {
            img.style.opacity = 1
        }

        document.getElementById('qz').appendChild(img)
    })

}

getChars()