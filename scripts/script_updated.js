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

                "<div><button class='[ selection--selectButton ]' onclick='selectCharacter(\"" + characters[i].url + "\", " + i + ")'>Select</button></div>"+
            '</div>'
        '</div>';
        cardContainer.innerHTML += characterCard;
    }
};
//no where you call the function here


//PLAYERS
        // We need to see a character is clicked
        // save the url to local storage
function selectCharacter(url, id){
    if(counter < 2){
        counter++;
        if(counter === 1 ) {
            localStorage.setItem('Player 1', url);
            localStorage.setItem('Player_1_id', id);
            alert('Player One Selected')
        }
        else{
            localStorage.setItem('Player 2', url);
            localStorage.setItem('Player_2_id', id);
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

//please dont change this code again
// rerun this application and select two players
// rememeber how we got the icons to show on this page? yea by going after the number 0-9.p
// You see when you passing the URL in?
// I want you to pass in a second parameter called id
// We are going to set an id in local storage so we can get the icon out
// does that make sense? i think so. on the img tag?, yes so do that now well catch up tomorrow or just now
