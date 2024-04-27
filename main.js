// // jquery Tic Tac Toe Game Code
console.log('main js is loaded')

var playerTurn = 1

function cleartheboard() {
    console.log('clearing the board!')



    $('.board td').removeClass('x o')
}
function isBoardFull() {
    console.log($('table.board td.x').length)


    if (
        $('table.board td.x, table.board td.o').length == $('table.board td').length
    ) {
        alert('tie game!')
        reset()
    }
}

function testForWinner() {
    console.log('Testing for a winner!...')
    var names = ['joe', 'ellen', 'jane']
    names[2]
    var winningCombos =
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ]
    for (var i = 0; i < winningCombos.length; i++) {
        var combos = winningCombos[i] // will be an array of 3 numbers

        if (
            $('#square' + combos[0]).hasClass('x') && $('#square' + combos[1]).hasClass('x') &&
            $(`#square${combos[2]}`).hasClass('x')












        ) {
            alert('Winner is Player 1!')
            reset()
        }
        if (
            $('#square' + combos[0]).hasClass('o') && $('#square' + combos[1]).hasClass('o') &&
            $(`#square${combos[2]}`).hasClass('o')
        )

        {
            alert('Winner is Player2!')
            reset()
        }
        
        

    }
    
}

function handleTheClick() {
    console.log('We are handling the click')


    {
        if (playerTurn == 1) {
            $(this).addClass('x')
            playerTurn = 2


        } else if (playerTurn == 2) {
            $(this).addClass('o')
            playerTurn = 1

        }
        $('#player-turn').html(playerTurn)

        $(this).off('click')

        testForWinner()

        isBoardFull()

    }

}










function setUpEventListeners() {
    console.log('Setting up the event listeners')
    $('.board td').off('click').on('click', handleTheClick)
}

function reset() {
    console.log('reseting....')
    cleartheboard()
    setUpEventListeners()
    playerTurn = 1
    $('#player-turn').html(playerTurn)
}

$('#reset').click(reset)
cleartheboard()
setUpEventListeners()




