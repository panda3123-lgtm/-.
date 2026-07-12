// =================================
// ゲーム状態
// =================================


let gameData = {

    player:null,

    enemy:null,

    deck:[],

};







let currentCard = null;

let player1;
let player2;

// =================================
// プレイヤー作成
// =================================

function createPlayer(name){


    return {

        name:name,

        lp:8000,

        cost:0,

        maxCost:0,


        hand:[],


        deck:[],


        grave:[],


        field:{


            monsters:[],


            cards:[],


            traps:[]


        },


        phase:"none"


    };


}





// =================================
// 画面管理
// =================================


function showScreen(id){


    document
    .querySelectorAll(".screen")
    .forEach(
        s => s.classList.add("hidden")
    );


    document
    .getElementById(id)
    .classList.remove("hidden");


}






// =================================
// ボタン処理
// =================================


document
.querySelectorAll("button")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


let action =
button.dataset.action;



switch(action){


case "start":

showScreen(
"menuScreen"
);

break;




case "battle":

showScreen(
"battleScreen"
);

break;




case "deck":

showScreen(
"deckScreen"
);

break;




case "cards":

showScreen(
"cardScreen"
);

loadCards();

break;




case "setting":

showScreen(
"settingScreen"
);

break;




case "menu":

showScreen(
"menuScreen"
);

break;




case "title":

showScreen(
"titleScreen"
);

break;




case "addDeck":

addDeckCard(
currentCard
);

break;




case "endTurn":

nextTurn();

break;



case "saveDeck":

saveDeck();

break;



case "exit":

alert(
"終了してください"
);

break;



}



});


});






// =================================
// カード一覧
// =================================


function loadCards(){


let list = 
document.getElementById(
"cardList"
);



list.innerHTML="";



cards.forEach(card=>{


let div =
document.createElement(
"div"
);



div.className="card";



div.innerHTML=`

<img src="${card.image}">


<h3>
${card.name}
</h3>


<p>
コスト ${card.cost}
</p>


<p>
ATK ${card.atk ?? "-"}
</p>

`;



div.onclick=()=>{


showDetail(card);


};



list.appendChild(div);



});



}






// =================================
// カード詳細
// =================================


function showDetail(card){


currentCard=card;



showScreen(
"detailScreen"
);



document
.getElementById(
"detailImage"
)
.src =
card.image;



document
.getElementById(
"detailName"
)
.textContent =
card.name;



document
.getElementById(
"detailCost"
)
.textContent =

"コスト : "
+
card.cost;



document
.getElementById(
"detailAtk"
)
.textContent =

"ATK : "
+
(card.atk ?? "-");



document
.getElementById(
"detailText"
)
.textContent =

card.text;



}






// =================================
// デッキ追加
// =================================


function addDeckCard(card){


if(
gameData.deck.length>=60
){

alert(
"デッキ枚数上限です"
);

return;

}



gameData.deck.push(card);



updateDeck();


alert(
card.name+"を追加しました"
);


}





function updateDeck(){


document
.getElementById(
"deckCount"
)
.textContent =

gameData.deck.length;



}






// =================================
// ターン処理準備
// =================================












// =================================
// 保存
// =================================


function saveDeck(){


localStorage.setItem(

"deck",

JSON.stringify(
gameData.deck
)

);



alert(
"保存しました"
);


}




function initializeGame(){


player1 =
createPlayer(
"Player1"
);


player2 =
createPlayer(
"Player2"
);



player1.deck =
cards.slice();



player2.deck =
cards.slice();



player1.deck =
shuffle(
player1.deck
);


player2.deck =
shuffle(
player2.deck
);



startGame(
player1,
player2
);


}


// =================================
// ゲーム初期化
// =================================

function initializeGame(){

    let save =
    localStorage.getItem("battleSave");


    if(save){

        loadGame();

    }
    else{

        createNewGame();

    }

}




    // ゲーム開始

    startGame(
        player1,
        player2
    );


}

// =================================
// ゲーム保存
// =================================

function saveGame(){


    let saveData = {


        player1: player1,


        player2: player2,


        turn: turnCount


    };



    localStorage.setItem(

        "battleSave",

        JSON.stringify(saveData)

    );


    console.log(
        "ゲームを保存しました"
    );


}






// =================================
// ゲーム復元
// =================================

function loadGame(){


    let saveData =
    localStorage.getItem(
        "battleSave"
    );



    if(!saveData){

        return false;

    }



    let data =
    JSON.parse(saveData);



    player1 =
    data.player1;


    player2 =
    data.player2;



    turnCount =
    data.turn;



    console.log(
        "ゲームを復元しました"
    );



    return true;


}






// =================================
// 新規ゲーム作成
// =================================

function createNewGame(){


    player1 =
    createPlayer(
        "Player1"
    );


    player2 =
    createPlayer(
        "Player2"
    );



    player1.deck =
    cards.slice();


    player2.deck =
    cards.slice();



    player1.deck =
    shuffle(
        player1.deck
    );


    player2.deck =
    shuffle(
        player2.deck
    );



    startGame(
        player1,
        player2
    );


}





// =================================
// 起動処理
// =================================

window.onload=function(){


showScreen(
"titleScreen"
);


initializeGame();


};
