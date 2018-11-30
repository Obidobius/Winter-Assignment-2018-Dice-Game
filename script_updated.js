var counter = 0;
fetch('https://anapioficeandfire.com/api/characters')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        createCharacters(myJson);
    });

function createCharacters(characters){
    console.log(characters);
    var cardContainer = document.getElementById('characterCardsContainer');
    for(var i = 0; i < characters.length; i++){
        
        var characterCard = 
        '<div class=" col-sm-4  card [ selection ]" id=\"' + i + '\">' +
            '<div class="[ col-sm-12 ] card-body">' +

                '<img class="[ selection__icon ]" src="icons/'+ [i] +'.png" />'+

                '<h5 class="card-title [ card-body__characterTitle ]"> name: '+ characters[i].aliases[0] +'</h5>' +

                '<p> gender: '+ characters[i].gender +'</p>' +

                "<div><button class='[ selection--selectButton ]' onclick='selectCharacter(\"" + characters[i].aliases[0] + "\")'>Select</button></div>"+
            '</div>'
        '</div>';
        cardContainer.innerHTML += characterCard;
    }
};



//PLAYERS
        // We need to see a character is clicked
        // save the url to local storage
function selectCharacter(alias){
    if(counter < 2){
        counter++;
        if(counter === 1 ) {
            localStorage.setItem('Player 1', alias);
            alert('Player One Selected')
        }
        else{
            localStorage.setItem('Player 2', alias);
            alert('Player Two Selected')

        }
    }
    else{
        alert('You can only choose two players')
    }


};
// Create a redirect to the board games page
// redirect to new page.
var startButton = document.getElementById("startButton");
startButton.addEventListener("click",startRace);


function startRace(){
    if(counter === 2){
        window.location.href="game_Page.html";
    }
    else{
        alert("Please select a character")
    };
};
