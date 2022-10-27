import data from "./questions.json" assert {type: 'json'};

var content = document.getElementById("content");

var currNumber = 1;
var questions = data.questions;

questions.forEach( (setOfQuestion) => {

    let card = document.createElement("div");
    card.classList.add("card");
    let number = document.createElement("div");
    number.classList.add("number");
    number.innerHTML += "<p>"+currNumber+".</p>";
    card.append(number);
    let qanda = document.createElement("div");
    qanda.classList.add("qanda");
    qanda.innerHTML = "<div class='question'><p>"+setOfQuestion.question+"</p></div>";
    let choices = document.createElement("div");
    choices.classList.add("choices");

    choices.innerHTML += `<input type="radio" name="ques${currNumber}" value="0" style="display:none" checked = "checked">`;

    let choiceNum = 1;
    setOfQuestion.choices.forEach((choice) => {        
        choices.innerHTML += `<input type="radio" name="ques${currNumber}" value="${choiceNum}"> <label for="ques${currNumber}">${choice}</label> <br>`;
        choiceNum++;
    });
    qanda.append(choices);
    card.append(qanda);
    content.append(card);

    currNumber++;

});

document.getElementById("submit").addEventListener("click", () => {
    let answers = document.querySelectorAll(".choices input:checked");
    let ques = 0;
    let score = 0;
    answers.forEach((e) => {
        if (e.value == questions[ques].answer){
            score++;
            // console.log(e.nextElementSibling.style);
            e.nextElementSibling.style.backgroundColor = "lightgreen";
        } else {
            e.nextElementSibling.style.backgroundColor = "lightcoral";
        }
        ques++;
    });

    document.getElementById("score").innerHTML += "Your score is: <span>" + score + "/" + ques + "</span>";
    
});