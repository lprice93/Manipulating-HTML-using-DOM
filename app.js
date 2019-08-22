document.addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    btn.append(btnText);
    document.body.prepend(btn);
    btn.style.display = 'block';

    btn.addEventListener('click', function () {
        alert('Keep pushing!');
    });


    let btn2 = document.getElementsByClassName('button-2')[0];
    btn2.addEventListener('click', function () {
        let text = document.getElementsByClassName('input')[0].value;
        if (text !== 0) {
            alert(text);
        };
    });

    let box = document.getElementsByClassName('div')[0];
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = 'orange';
    });

    box.addEventListener("mouseleave", function () {
        box.style.backgroundColor = '';
    });

    let para = document.createElement("p");
    let copy = document.createTextNode("Hey, I am some random text!");
    para.append(copy);
    document.body.appendChild(para);

    para.addEventListener("click", function () {
        function getRandomColor() {
            let colors = ['orange', 'lightblue', 'lightgreen', 'salmon', 'olive', 'darkcyan', 'lightpurple', 'maroon'];
            let randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        } para.style.color = getRandomColor();
    });

    let btn3 = document.createElement("button");
    let btn3Text = document.createTextNode("Add Span");
    btn3.append(btn3Text);
    document.body.append(btn3);

    let div = document.createElement("div");
    document.body.append(div);
    let span = document.createElement("span");
    let spanText = document.createTextNode("Lindsay");
    div.append(span);

    btn3.addEventListener("click", function () {
        span.append(spanText);
        div.append(span);
    });

    let btn4 = document.getElementsByClassName('button-4')[0];
    let ul = document.getElementsByClassName('ul')[0];
    let li = document.createElement('li');
    // let liText =

    let friendsArray = ['Haily', 'Jasmine', "Halle", "Alexis", "Jalon", "Ariel", "Natasha", "Aisha", "Camille", "Sophia"];


    btn4.addEventListener("click", function () {
        ul.append(li);
    });

});