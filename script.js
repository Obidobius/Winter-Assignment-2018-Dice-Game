var myJsonData;
var playerOne = {
    aliases: "#"
}
var playerTwo = {  
    aliases: "#"
}


fetch('https://anapioficeandfire.com/api/characters')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        //console.log(JSON.stringify(myJson));
        FunctionOne(myJson);
        myJsonData = myJson;

    });

    var startButton = document.createElement("button");
    startButton.setAttribute("id","startButton");
    startButton.innerHTML = "Start The Race";
    document.getElementById('startButtonContainer').appendChild(startButton);

//Creating 10 div with class and ID from 1 to 10
function FunctionOne(myJson) {

    var createDiv = document.createDocumentFragment();
    for (var i = 0; i < myJson.length; i++) {

        var char = document.createElement("div");
        char.setAttribute("class", "[ selection ] card");
        char.setAttribute("id", i);
        document.getElementById('contains').appendChild(char);


    //Create card Body
        var cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        for (var y = 0; y < document.getElementsByClassName("card").length; y++) {
            document.getElementsByClassName("card")[y].appendChild(cardBody);
        }


    //Creates H5 NAMES in cards body
        var names = document.createElement("h5");
        names.setAttribute("class", "card-title [ card-body__characterTitle ]");
        for (var u = 0; u < document.getElementsByClassName("card-body").length; u++) {
            document.getElementsByClassName("card-body")[u].appendChild(names);
        }

        var characterAlias = document.createTextNode(myJson[i].aliases);
        names.appendChild(characterAlias);

    //CREATE INFO ON CARDS
        var textInfo = document.createElement("p");
        textInfo.setAttribute("class", "card-text");
        for (var o = 0; o < document.getElementsByClassName("card-body").length; o++) {
            document.getElementsByClassName("card-body")[o].appendChild(textInfo);
        }


    //Character sex/gender
        var gender = document.createTextNode(myJson[i].gender);
        textInfo.appendChild(gender);

    }
    document.body.appendChild(createDiv);

//---------------------------------------ICONS--------------------------------------------------

//THE DAUGHTER OF THE DUSK
            //icon
    var iconDusk = new Image(0,0);
        iconDusk.src="icons/DaughterDusk_icon.png";
        iconDusk.setAttribute("class","[ selection__icon ]");
        iconDusk.setAttribute("id","iconDusk");
        document.getElementById("0").appendChild(iconDusk);
            //info
    var dusk = document.createElement("p");
        dusk.setAttribute("class","[ selection__characterInfo ]");
        dusk.setAttribute("id","dusk");
        dusk.innerHTML="The Daughter of the Dusk is a courtesan in Braavos,She is beautiful. She has her own barge and servants to pole her to trysts.";
        document.getElementById("0").appendChild(dusk);
            //button
    var infoButtonDusk = document.createElement("button");
        infoButtonDusk.setAttribute("class", "[ selection--selectButton ]");
        infoButtonDusk.setAttribute("id","buttonDusk");
        infoButtonDusk.innerHTML = "Select";
        document.getElementById("0").appendChild(infoButtonDusk);

//HODOR
            //icon
    var iconHodor = new Image(0,0);
        iconHodor.src="icons/hodor_icon.png";
        iconHodor.setAttribute("class","[ selection__icon ]");
        iconHodor.setAttribute("id","iconHodor");
        document.getElementById("1").appendChild(iconHodor);
            //info
    var hodor = document.createElement("p");
        hodor.setAttribute("class","[ selection__characterInfo ]");
        hodor.setAttribute("id","hodor");
        hodor.innerHTML="Hodor is simple-minded,only capable of saying one word, 'hodor', though he can understand complex instructions.";
        document.getElementById("1").appendChild(hodor);
            //button
    var infoButtonHodor = document.createElement("button");
        infoButtonHodor.setAttribute("class", "[ selection--selectButton ]");
        infoButtonHodor.innerHTML = "Select";
        document.getElementById("1").appendChild(infoButtonHodor);

//LAMPREY
            //icon
    var iconlamprey = new Image(0,0);
        iconlamprey.src="icons/lamprey_icon.png";
        iconlamprey.setAttribute("class","[ selection__icon ]");
        iconlamprey.setAttribute("id","iconLamprey");
        document.getElementById("2").appendChild(iconlamprey);
            //info
    var lamprey = document.createElement("p");
        lamprey.setAttribute("class","[ selection__characterInfo ]");
        lamprey.setAttribute("id","lamprey");
        lamprey.innerHTML="Unwashed hair and pebbled skin. He once brought the imprisoned Davos Seaworth some lamprey and got it a his nickname.";
        document.getElementById("2").appendChild(lamprey);
            //button
    var infoButtonLamprey = document.createElement("button");
        infoButtonLamprey.setAttribute("class", "[ selection--selectButton ]");
        infoButtonLamprey.innerHTML = "Select";
        document.getElementById("2").appendChild(infoButtonLamprey);

//THE MERLING QUEEN
            //icon
    var iconMerlingQueen = new Image(0,0);
        iconMerlingQueen.src="icons/merlingQueen_icon.png";
        iconMerlingQueen.setAttribute("class","[ selection__icon ]");
        iconMerlingQueen.setAttribute("id","iconQueen");
        document.getElementById("3").appendChild(iconMerlingQueen);
            //info
    var queen = document.createElement("p");
        queen.setAttribute("class","[ selection__characterInfo ]");
        queen.setAttribute("id","queen");
        queen.innerHTML="The Merling Queen is a courtesan in Braavos. Both beautiful and deadly. Never seen without her Mermaids to hold her hair and veil.";
        document.getElementById("3").appendChild(queen);
            //button
    var infoButtonQueen = document.createElement("button");
        infoButtonQueen.setAttribute("class", "[ selection--selectButton ]");
        infoButtonQueen.innerHTML = "Select";
        document.getElementById("3").appendChild(infoButtonQueen);

//OLD BRACKBONES
            //icon
    var iconCrackbone = new Image(0,0);
        iconCrackbone.src="icons/crackbone_icon.png";
        iconCrackbone.setAttribute("class","[ selection__icon ]");
        iconCrackbone.setAttribute("id","iconCrackbone");
        document.getElementById("4").appendChild(iconCrackbone);
            //info
    var crackbones = document.createElement("p");
        crackbones.setAttribute("class","[ selection__characterInfo ]");
        crackbones.setAttribute("id","crackbones");
        crackbones.innerHTML="Crackbones fought a dragon once,didn't need no magic sword. Just tied its neck in a knot, every time it breathed fire it roasted its own arse.";
        document.getElementById("4").appendChild(crackbones);
            //button
    var infoButtonCrackbones = document.createElement("button");
        infoButtonCrackbones.setAttribute("class", "[ selection--selectButton ]");
        infoButtonCrackbones.innerHTML = "Select";
        document.getElementById("4").appendChild(infoButtonCrackbones);

//THE POETESS
            //icon
    var iconpoetess = new Image(0,0);
        iconpoetess.src="icons/poetess_icon.png";
        iconpoetess.setAttribute("class","[ selection__icon ]");
        iconpoetess.setAttribute("id","iconPoetess");
        document.getElementById("5").appendChild(iconpoetess);
            //info
    var poetess = document.createElement("p");
        poetess.setAttribute("class","[ selection__characterInfo ]");
        poetess.setAttribute("id","poetess");
        poetess.innerHTML="The Poetess is a courtesa in Braavos. She always have a book at hand. Who knows what secrets she holds, and can use against you.";
        document.getElementById("5").appendChild(poetess);
            //button
    var infoButtonPoetess = document.createElement("button");
        infoButtonPoetess.setAttribute("class", "[ selection--selectButton ]");
        infoButtonPoetess.innerHTML = "Select";
        document.getElementById("5").appendChild(infoButtonPoetess);

//PORRIDGE
            //icon
    var iconporridge = new Image(0,0);
        iconporridge.src="icons/porridge_icon.png";
        iconporridge.setAttribute("class","[ selection__icon ]");
        iconporridge.setAttribute("id","iconPorridge");
        document.getElementById("6").appendChild(iconporridge);
            //info
    var porridge = document.createElement("p");
        porridge.setAttribute("class","[ selection__characterInfo ]");
        porridge.setAttribute("id","porridge");
        porridge.innerHTML="Porridge is a gaoler at Dragonstone. He brought the imprisoned Davos Seaworth some Porridge and got it as him nickname.";
        document.getElementById("6").appendChild(porridge);
            //button
    var infoButtonPorridge = document.createElement("button");
        infoButtonPorridge.setAttribute("class", "[ selection--selectButton ]");
        infoButtonPorridge.innerHTML = "Select";
        document.getElementById("6").appendChild(infoButtonPorridge);


//QUICKFINGER
            //icon
    var iconQuickFinger = new Image(0,0);
        iconQuickFinger.src="icons/quickfinger_icon.png";
        iconQuickFinger.setAttribute("class","[ selection__icon ]");
        iconQuickFinger.setAttribute("id","iconQuickFinger");
        document.getElementById("7").appendChild(iconQuickFinger);
            //info
    var quickfinger = document.createElement("p");
        quickfinger.setAttribute("class","[ selection__characterInfo ]");
        quickfinger.setAttribute("id","quickfinger");
        quickfinger.innerHTML="Quickfinger was a master thief. With his biggest goal in sight, to steal several real dragon eggs. He sadly got imprisoned.";
        document.getElementById("7").appendChild(quickfinger);
            //button
    var infoButtonQuickfinger = document.createElement("button");
        infoButtonQuickfinger.setAttribute("class", "[ selection--selectButton ]");
        infoButtonQuickfinger.innerHTML = "Select";
        document.getElementById("7").appendChild(infoButtonQuickfinger);

//THE SAILOR'S WIFE
            //icon
    var iconSailorWife = new Image(0,0);
        iconSailorWife.src="icons/sailorWife_icon.png";
        iconSailorWife.setAttribute("class","[ selection__icon ]");
        iconSailorWife.setAttribute("id","iconsailorWife");
        document.getElementById("8").appendChild(iconSailorWife);
            //info
    var wife = document.createElement("p");
        wife.setAttribute("class","[ selection__characterInfo ]");
        wife.setAttribute("id","wife");
        wife.innerHTML="Loosing her husband to the sea at age 14. Praying daily at the temple for her husband to return. Will her prayers be heard?";
        document.getElementById("8").appendChild(wife);
            //button
    var infoButtonSailorWife = document.createElement("button");
        infoButtonSailorWife.setAttribute("class", "[ selection--selectButton ]");
        infoButtonSailorWife.innerHTML = "Select";
        document.getElementById("8").appendChild(infoButtonSailorWife);

//THE VEILED LADY
            //icon
    var iconVeiledLady = new Image(0,0);
        iconVeiledLady.src="icons/veiledLady_icon.png";
        iconVeiledLady.setAttribute("class","[ selection__icon ]");
        iconVeiledLady.setAttribute("id","iconVeiledLady");
        document.getElementById("9").appendChild(iconVeiledLady);
            //info
    var lady = document.createElement("p");
        lady.setAttribute("class","[ selection__characterInfo ]");
        lady.setAttribute("id","lady");
        lady.innerHTML="The Veiled Lady is a courtesan in Braavos. She is beautiful though none but her lovers see her face. Will she ever reveale her face?";
        document.getElementById("9").appendChild(lady);
            //button
    var infoButtonVeiledLady = document.createElement("button");
        infoButtonVeiledLady.setAttribute("class", "[ selection--selectButton ]");
        infoButtonVeiledLady.setAttribute("id","testing");
        infoButtonVeiledLady.innerHTML = "Select";
        document.getElementById("9").appendChild(infoButtonVeiledLady);
        document.getElementById("testing").addEventListener("click",addEvents());
}



//PLAYERS

function collect(){
    var myStorage = localStorage.setItem( "api",'https://anapioficeandfire.com/api/characters');
    console.log("test");
    console.log(myStorage);
}


function addEvents(){
    var buttin = document.getElementById("testing");
    buttin.addEventListener("click", collect());
}


/*

var listOfButtons = document.getElementsByClassName("selection--selectButton");
console.log(listOfButtons);

let apple = document.querySelectorAll();

for( var i = 0; i < listOfButtons.length; i++){
    console.log("Hallo");
*/

    /*
    item.addEventListener("click", function(){
        console.log("player 1");
        console.log(listOfButtons[i].button);
        if(playerOne.aliases == "#"){
            playerOne.aliases = myJson[i].aliases;
            localStorage.setItem("Challenger One", playerOne.aliases);
            console.log(playerOne.aliases);
        }
        else if(playerTwo === "#"){
            console.log("player 2");
            playerTwo.aliases = myJson[i].aliases;
            localStorage.setItem("Challenger Two", playerTwo.aliases);
        }
        console.log(playerOne);
        console.log(playerTwo);*/
    //});


/*
function selectCharacter(character){
    if(playerOne == null){
        playerOne = character;
        console.log(playerOne)
    } else {
        playerTwo = character;
        console.log(playerTwo)
    }
};
*/
