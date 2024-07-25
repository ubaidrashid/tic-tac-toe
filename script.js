let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset-button');
let h2 = document.querySelector('h2')
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box')


        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X'
            turnO = true;
        }
        box.disabled = true;


        checkWinner()
    })
})
function showWinner(winner){
 for_winner.innerText = winner
}

const checkWinner = () => {
    for (let patterns of winPatterns) {

       
        let pos1Val =boxes[patterns[0]].innerText;
        let pos2Val =boxes[patterns[1]].innerText;
        let pos3Val =boxes[patterns[2]].innerText;
           
        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner',pos1Val)
                showWinner(pos1Val)
                h2.classList.remove('none')                
            }
        }
    }
}

