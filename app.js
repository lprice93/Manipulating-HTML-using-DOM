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

    // let btn3 = document.createElement('button-3');
    // let btn3Text = document.createTextNode('Do Something');
    // btn3.append(btn3Text);
    // document.body.prepend(btn3);

});