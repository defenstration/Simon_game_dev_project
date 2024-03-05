

let level = 0

let buttonColors=[
    "red", "blue", "green", "yellow"
];

let gamePattern = [];

let userPattern = [];


function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    
    switch (randomChosenColor){
     case "red":
        let red = new Audio("/sounds/red.mp3");
        red.play();
        $('#red').addClass('pressed');
        setTimeout(function(){
            $('#red').removeClass('pressed')},
            400
        );
        break;

     case "blue":
        let blue = new Audio("/sounds/blue.mp3")
        blue.play();
        $('#blue').addClass('pressed');
        setTimeout(function(){
            $('#blue').removeClass('pressed')},
            400
        );
        break;

     case "yellow":
        let yellow = new Audio("/sounds/yellow.mp3")
        yellow.play();
        $('#yellow').addClass('pressed');
        setTimeout(function(){
            $('#yellow').removeClass('pressed')},
            400
        );
        break;

     case "green":
        let green = new Audio('/sounds/green.mp3')
        green.play();
        $('#green').addClass('pressed');
        setTimeout(function(){
            $('#green').removeClass('pressed')},
            400
        );
        break;
    }

    level = level+1

    $('h1').text('Level '+ level)

    console.log(gamePattern);
}
/*function(){
    let id = $(this).attr('id')
    console.log(id)
})*/

$('.btn').on("click", function() {

    let id = $(this).attr('id');

    console.log(id)

    //let userInput = button.id;

    userPattern.push(id);
    
    switch (id){
     case "red":
        let red = new Audio("/sounds/red.mp3");
        red.play();
        $('#red').addClass('pressed');
        setTimeout(function(){
            $('#red').removeClass('pressed')},
            400
        );
        break;

     case "blue":
        let blue = new Audio("/sounds/blue.mp3")
        blue.play();
        $('#blue').addClass('pressed');
        setTimeout(function(){
            $('#blue').removeClass('pressed')},
            400
        );
        break;

     case "yellow":
        let yellow = new Audio("/sounds/yellow.mp3")
        yellow.play();
        $('#yellow').addClass('pressed');
        setTimeout(function(){
            $('#yellow').removeClass('pressed')},
            400
        );
        break;

     case "green":
        let green = new Audio('/sounds/green.mp3')
        green.play();
        $('#green').addClass('pressed');
        setTimeout(function(){
            $('#green').removeClass('pressed')},
            400
        );
        break;
    }

    console.log(userPattern)

    checkAnswer(id)
})

/*$(".btn").on('click', function(){
    $(".btn").addClass("pressed");

    setTimeout(function(){
        $(".btn").removeClass("pressed")}, 
        400)
})*/

$(document).on("keydown", function(event) {
        nextSequence();
    
        console.log(event.key);
        console.log(gamePattern);
    }
);

/*function checkAnswer (currentLevel) {
    if (currentLevel === gamePattern[gamePattern.length - 1]){
        console.log("success")
        setTimeout(function(){
            nextSequence();
            userPattern = []},
            1000)
    } else {
        console.log("failure")
        gamePattern = [];
        userPattern = [];
        level = 0;
        $("h1").text("Game Over");

        setTimeout(function(){
            $("h1").text("Press A Key to Start")},
            2000);
    }
}*/



/*function checkAnswer () {
    for (let i = 0; i < gamePattern.length; i++) {
        if (userPattern[i] === gamePattern[i] && userPattern.length === gamePattern.length) {
            console.log('success')
            $('h1').text('Round ' + level + ' complete!');

            userPattern = [];

            setTimeout(function(){
                $('h1').text('Level ' + level)
            }, 2000);
            return
        } else if (userPattern[i] === gamePattern[i]) {
        console.log('success')
        return
        } else {
        console.log("failure")
        gamePattern = [];
        userPattern = [];
        level = 0;
        $("h1").text("Game Over");

        setTimeout(function(){
            $("h1").text("Press A Key to Start")},
            2000);
    }
}}*/

function checkAnswer() {
    if(userPattern.length === gamePattern.length) {
        if (userPattern.every(function(value, index){ 
            value === gamePattern[index]})) {
            $("h1").text('Round ' + level -1 + " complete!");
            console.log('success');
            setTimeout(function(){
                $("h1").text("Level " + level)},
                2000)
            } else {
                console.log('failure');
                gamePattern = [];
                userPattern = [];
                level = 0;
                $('h1').text('Game Over');

                setTimeout(function() {
                    $('h1').text('Press A Key to Start');
                }, 2000);
            }
        
        } else if (userPattern.every(function(value, index){
            value===gamePattern[index]
        })){
            console.log('success')
        } else {
            console.log('failure');
            gamePattern = [];
            userPattern = [];
            level = 0;
            $('h1').text('Game Over');
    
            setTimeout(function() {
                $('h1').text('Press A Key to Start');
            }, 2000);
        }

}





/*function checkAnswer() {
    if (userPattern.length === gamePattern.length) {
        if (userPattern.every((value, index) => value === gamePattern[index])) {
            console.log('success');
            $('h1').text('Round ' + level + ' complete!');
            userPattern = [];

            setTimeout(function() {
                $('h1').text('Level ' + level);
            }, 2000);
        } else {
            console.log('failure');
            gamePattern = [];
            userPattern = [];
            level = 0;
            $('h1').text('Game Over');

            setTimeout(function() {
                $('h1').text('Press A Key to Start');
            }, 2000);
        }
    } else if (userPattern.every((value, index) => value === gamePattern[index])) {
        console.log('success');
        // Prompt user for next input
    } else {
        console.log('failure');
        gamePattern = [];
        userPattern = [];
        level = 0;
        $('h1').text('Game Over');

        setTimeout(function() {
            $('h1').text('Press A Key to Start');
        }, 2000);
    }
}*/
