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
                "<h5 class='card-title [ card-body__characterTitle ]'> name: "+ characters[i].aliases[0] +"</h5>" +
                '<p> gender: '+ characters[i].gender +'</p>' +
                "<div><button class='[ selection--selectButton ]' onclick='selectCharacter(" + i + ")'>Select</button></div>"+
            '</div>'
        '</div>';
        cardContainer.innerHTML += characterCard;
    }
};
function selectCharacter(id){
    if(counter < 2){
        counter++;
        if(counter === 1 ) {
            localStorage.setItem('Player_1_id', id);
            alert('Player One Selected')
        }
        else{
            localStorage.setItem('Player_2_id', id);
            alert('Player Two Selected')

        }
    }
    else{
        alert('You can only choose two players')
    }


};
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
