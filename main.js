// =================================
// ゲーム状態
// =================================


let gameData = {

    player:null,

    enemy:null,

    deck:[],

};







let currentCard = null;





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






// =================================
// 起動処理
// =================================


window.onload=function(){


showScreen(
"titleScreen"
);


};
