let boxs = document.querySelectorAll('.box');
let turn = 'x';
let title = document.querySelector('.title');
let boxContent = [];
boxs.forEach( box  => {
    box.onclick = function () {
        game(this.id);
    }
})
function congrats(num1,num2,num3) {
    title.innerHTML = `${boxContent[num2]} winner`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';
    setInterval(function () {
        title.innerHTML += '.';
    }, 1000)
    setTimeout(function () {
        location.reload();
    },4000)
}
function game(id) {
    let elem = document.getElementById(id);
    if (turn === 'x' && elem.innerHTML == '') {
        elem.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o turn';
    }
    else if (turn === 'o' && elem.innerHTML == '') {
        elem.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x turn';
    }
    winner();
}

function winner() {
    for (let i = 1; i < 10; i++){
        boxContent[i] = document.getElementById('item'+ i).innerHTML;
    }

    if (boxContent[1] == boxContent[2] && boxContent[2] == boxContent[3] && boxContent[2] != '') {
        congrats(1,2,3);
    }
    if (boxContent[4] == boxContent[5] && boxContent[5] == boxContent[6] && boxContent[5] != '') {
        congrats(4,5,6);
    }
    if (boxContent[7] == boxContent[8] && boxContent[8] == boxContent[9] && boxContent[8] != '') {
        congrats(7,8,9);
    }

    if (boxContent[1] == boxContent[4] && boxContent[4] == boxContent[7] && boxContent[4] != '') {
        congrats(1,4,7);
    }
    if (boxContent[2] == boxContent[5] && boxContent[5] == boxContent[8] && boxContent[5] != '') {
        congrats(2,5,8);
    }
    if (boxContent[3] == boxContent[6] && boxContent[6] == boxContent[9] && boxContent[6] != '') {
        congrats(3,6,9);
    }

    if (boxContent[3] == boxContent[5] && boxContent[5] == boxContent[7] && boxContent[5] != '') {
        congrats(3,5,7);
    }
    if (boxContent[1] == boxContent[5] && boxContent[5] == boxContent[9] && boxContent[5] != '') {
        congrats(1,5,9);
    }

}

