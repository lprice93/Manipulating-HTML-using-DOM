document.addEventListener('DOMContentLoaded', function () {

    let btn = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    btn.append(btnText);
    document.body.append(btn);
    btn.style.display = 'block';

    btn.addEventListener('click', function () {
        alert('Keep pushing!');
    });


    let btn2 = document.getElementsByClassName('button-2');
    btn2[0].addEventListener('click', function () {
        let text = document.getElementsByClassName('input')[0].value;
        if (text !== 0) {
            alert(text);
        };
    });
});