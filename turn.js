// =================================
// ターン処理 Part1
// =================================



// 現在のターンプレイヤー

let currentPlayer = null;



// ターン数

let turnCount = 0;





// =================================
// ターン開始
// =================================

function startTurn(player){


    currentPlayer = player;


    turnCount++;



    console.log(
        "ターン開始:",
        turnCount
    );



    // コスト回復＋増加

    recoverCost(player);



    // ドロー

    drawCard(
        player,
        1
    );



    // 状態リセット

    resetTurnStatus(player);



    player.phase =
    "main";

}





// =================================
// コスト処理
// =================================

function recoverCost(player){



    if(player.cost === undefined){

        player.cost = 0;

    }



    // 最大値まで回復

    player.cost =
    player.maxCost || player.cost;



    // ターンごとに+2

    player.maxCost =
    (player.maxCost || 0) + 2;



    // 上限10

    if(player.maxCost > 10){

        player.maxCost = 10;

    }



    player.cost =
    player.maxCost;



}






// =================================
// ターン終了
// =================================

function endTurn(player){


    player.phase =
    "end";



    console.log(
        "ターン終了"
    );



    nextTurn();

}





// =================================
// 次のターン
// =================================

function nextTurn(){


    if(currentPlayer === player1){


        startTurn(player2);


    }

    else{


        startTurn(player1);


    }


}

// =================================
// ターン処理 Part2
// フェイズ管理
// =================================




// =================================
// ゲーム開始
// =================================

function startGame(first, second){


    player1 = first;

    player2 = second;



    // 初期設定

    player1.lp = 8000;
    player2.lp = 8000;



    player1.maxCost = 1;
    player2.maxCost = 2;



    player1.cost = player1.maxCost;
    player2.cost = player2.maxCost;



    // 初期手札5枚

    drawCard(
        player1,
        5
    );


    drawCard(
        player2,
        5
    );



    console.log(
        "ゲーム開始"
    );



    startTurn(player1);

}





// =================================
// メインフェイズ
// =================================

function mainPhase(player){


    player.phase =
    "main";



    console.log(
        "メインフェイズ"
    );


}





// =================================
// バトルフェイズ
// =================================

function battlePhase(player){


    player.phase =
    "battle";



    console.log(
        "バトルフェイズ"
    );

}





// =================================
// エンドフェイズ
// =================================

function endPhase(player){


    player.phase =
    "end";



    console.log(
        "エンドフェイズ"
    );



    endTurn(player);

}





// =================================
// 相手ターン時トラップ確認
// =================================

function checkTrap(player){


    if(
        player.field.traps.length > 0
    ){

        console.log(
            "発動可能なトラップあり"
        );

    }

}

