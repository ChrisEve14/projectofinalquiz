const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


const myQuestions = [
    {
      question: "Choose your favorite season",
      answers: {
        a: "Winter",
        b: "Summer",
        c: "Spring",
        d: "Fall"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c",
      answerD: "d"
    },
    {
      question: "Pick a color:",
      answers: {
        a: "Yellow",
        b: "Blue",
        c: "Red"
      },
      answerA: "a",
      answerB: "b",
      answerC: "c",
      answerD: "d"
    },
    {
        question: "Choose an item:",
        answers: {
          a: "A Painting",
          b: "A Guitar",
          c: "Candy"
        },
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d"
      },
      {
        question: "Choose a drink:",
        answers: {
          a: "Coffee",
          b: "Margarita",
          c: "Red Wine"
        },
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d"
      },
      {
        question: "Pick a word, any word:",
        answers: {
          a: "Magnolia",
          b: "Ivy",
          c: "Leilani"
        },
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d"
      },
      
  ];

function buildQuiz(){

     // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

    //   add this question and its answers to the output
      output.push(
        `<div class = "slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
        </div>`

      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

     // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');
  // keep track of user's answers
//   let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer == currentQuestion.answerA){
      // add to the number of correct answers
    //   numCorrect++;
    // resultsContainer.innerHTML = `Congrats! You are Willow`

    submitButton.addEventListener('click', () => {

        Swal.fire({
            title: 'Congrats!',
            text: 'You are Willow',
            imageUrl: 'https://64.media.tumblr.com/97e12e6afa755ee09ca87b89526dd9a5/a634737d40c74cdd-fa/s1280x1920/960114ef1b281ba52abd3190efe1c7cc9d66e31a.jpg',
            // imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Willow',
          })
    
        });

      // color the answers green
    //   answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else if (userAnswer == currentQuestion.answerB) {
      // color the answers red
    //   answerContainers[questionNumber].style.color = 'red';
    // resultsContainer.innerHTML = `Congrats! You are Juniper`


    submitButton.addEventListener('click', () => {

        Swal.fire({
            title: 'Congrats!',
            text: 'You are Juniper',
            imageUrl: 'https://64.media.tumblr.com/15c5027619150ba2e645f6e019813134/tumblr_pk4hn4cgfB1slaih9_1280.jpg',
            // imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Juniper',
          })
    
        });

    }else 
    // resultsContainer.innerHTML = `Congrats! You are Hazel`

    submitButton.addEventListener('click', () => {

        Swal.fire({
            title: 'Congrats!',
            text: 'You are Hazel',
            imageUrl: 'https://glittermagazine.co/wp-content/uploads/2020/10/cfb2b2457305f5e6afe3023a9cc3879c.png',
            // imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Hazel',
          })
    
        });

  });
  // show number of correct answers out of total
//   resultsContainer.innerHTML = `Congrats! You are Willow`
//   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
      restartButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      previousButton.style.display = 'none';
      restartButton.style.display = 'inline-block';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function restartSlide() {
    showSlide(newSlide = 0);
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }


// display quiz right away
buildQuiz();

// Pagination

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const restartButton = document.getElementById("restart");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

showSlide(currentSlide);

// on submit, show results
submitButton.addEventListener('mouseover', showResults);
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
    'images': [
    {'imageUrl': "/images/willow.jpg"},
    {'imageUrl': "/images/hazel.png"},
    {'imageUrl': "/images/juniper.jpg"}]
  }

  datos.images.forEach( function (obj) {
    let img = new Image()
    img.src = obj.imageUrl;
    img.setAttribute( 'id', 'imagen')
    img.setAttribute( 'height', '200px')
    document.getElementById('qz').appendChild(img)
  })

}

getChars()

