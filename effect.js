// =================================
// 効果エンジン Part1  =================================



// =================================
// ドロー処理
// =================================


function drawCard(player, amount){


    for(let i = 0; i < amount; i++){


        if(player.deck.length <= 0){

            console.log("デッキ切れ");

            player.lose = true;

            return;

        }



        let card =
            player.deck.shift();



        player.hand.push(card);



        console.log(
            card.name + "をドロー"
        );

    }

}





// =================================
// LP回復
// =================================


function heal(player, amount){


    player.lp += amount;



    if(player.lp > 8000){

        player.lp = 8000;

    }


}





// =================================
// ダメージ
// =================================


function damage(player, amount){


    player.lp -= amount;



    if(player.lp <= 0){

        player.lose = true;

    }


}





// =================================
// 相手モンスター破壊
// =================================


function destroyEnemyMonster(player){


    if(player.field.monsters.length === 0){

        console.log(
            "破壊できるモンスターがいません"
        );

        return;

    }



    let target =
        player.field.monsters[0];



    player.field.monsters.splice(
        0,
        1
    );



    console.log(
        target.name+"を破壊"
    );


}





// =================================
// カードを墓地へ送る
// =================================


function sendToGrave(player, card){


    let index =
        player.field.cards.indexOf(card);



    if(index !== -1){

        player.field.cards.splice(
            index,
            1
        );

    }



    player.grave.push(card);


}





// =================================
// コスト操作
// =================================


function addCost(player, amount){


    player.cost += amount;



    if(player.cost > 10){

        player.cost = 10;

    }


}

// =================================
// 効果エンジン Part2
// 破壊・除外・全体処理
// =================================



// =================================
// デッキシャッフル
// =================================

function shuffle(deck){

    let result = [...deck];


    for(let i = result.length - 1; i > 0; i--){

        let j =
        Math.floor(
            Math.random() * (i + 1)
        );


        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];

    }


    return result;

}




// =================================
// 相手カード1枚破壊
// =================================

function destroyEnemyCard(player){


    if(
        player.field.cards.length > 0
    ){

        let target =
        player.field.cards[0];


        player.field.cards.splice(
            0,
            1
        );


        player.grave.push(
            target
        );


        console.log(
            target.name + "を破壊"
        );

    }

}




// =================================
// コスト指定以上のカード破壊
// =================================

function destroyEnemyCostCard(
    player,
    cost
){


    let target =
    player.field.cards.find(
        card => card.cost >= cost
    );


    if(target){


        let index =
        player.field.cards.indexOf(target);


        player.field.cards.splice(
            index,
            1
        );


        player.grave.push(
            target
        );


        console.log(
            target.name + "を破壊"
        );

    }

}




// =================================
// 魔法カード除去
// =================================

function removeMagicCards(
    player,
    amount
){


    let count = 0;


    player.grave =
    player.grave.filter(card => {


        if(
            card.type === "spell"
            &&
            count < amount
        ){

            count++;

            return false;

        }


        return true;

    });

}




// =================================
// フィールド全破壊
// =================================

function destroyAllCards(player){


    if(player.field.cards){


        player.field.cards
        .forEach(card => {

            player.grave.push(card);

        });


    }


    if(player.field.monsters){


        player.field.monsters
        .forEach(card => {

            player.grave.push(card);

        });


    }


    if(player.field.traps){


        player.field.traps
        .forEach(card => {

            player.grave.push(card);

        });


    }



    player.field.cards = [];

    player.field.monsters = [];

    player.field.traps = [];


    console.log(
        "フィールドを全破壊"
    );

}

// =================================
// 効果エンジン Part4
// 状態管理・勝利判定
// =================================




// =================================
// カードを手札に戻す
// =================================

function returnToHand(player, card){


    let index =
    player.field.cards.indexOf(card);



    if(index !== -1){


        player.field.cards.splice(
            index,
            1
        );


        player.hand.push(card);


        console.log(
            card.name+"を手札に戻した"
        );

    }

}





// =================================
// コスト支払い
// =================================

function payCost(player, amount){


    if(player.cost < amount){


        console.log(
            "コスト不足"
        );


        return false;

    }



    player.cost -= amount;


    return true;


}





// =================================
// コスト増減
// =================================

function changeCost(player, amount){


    player.cost += amount;



    if(player.cost > 10){

        player.cost = 10;

    }



    if(player.cost < 0){

        player.cost = 0;

    }


}





// =================================
// 効果無効
// =================================

function nullifyEffect(card){


    card.effectDisabled = true;


    console.log(
        card.name+"の効果を無効化"
    );

}





// =================================
// 勝利判定
// =================================

function checkVictory(player, opponent){



    // LPによる勝利

    if(opponent.lp <= 0){

        return player;

    }



    // デッキ切れ

    if(
        opponent.deck.length <= 0
    ){

        return player;

    }



    // 自分敗北

    if(player.lp <= 0){

        return opponent;

    }



    return null;


}





// =================================
// ターン終了時リセット
// =================================

function resetTurnStatus(player){



    player.cannotAttack = false;


    player.lowCostSummon = false;


    player.freeSummon = false;


    player.canHiddenSummon = false;



    if(player.field.monsters){


        player.field.monsters
        .forEach(monster=>{


            monster.attacked = false;


        });


    }



}

