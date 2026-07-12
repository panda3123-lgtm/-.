// =================================
// カード個別効果処理 Part1
// =================================


function activateCardEffect(card, player, opponent){


    switch(card.name){



        // =================================
        // 自衛用拳銃
        // =================================

        case "自衛用拳銃":

            // 実際の発動条件判定はtrap処理側で行う

            opponent.lp -= 500;

            console.log(
                "自衛用拳銃！相手に500ダメージ"
            );

            break;



        // =================================
        // 仮面は正体を隠すもの
        // =================================

        case "仮面は正体を隠すもの":

            player.canHiddenSummon = true;

            console.log(
                "次の召喚を裏向きで行える"
            );

            break;



        // =================================
        // 参拝
        // =================================

        case "参拝":

            player.lp += 500;

            console.log(
                "LPを500回復"
            );

            break;



        // =================================
        // これあげる
        // =================================

        case "これあげる":


            // 手札補充

            drawCard(player,2);



            // 選択効果

            let choice = prompt(
                "効果を選択\n"+
                "1:さらに2枚ドロー\n"+
                "2:コスト4以下を無料召喚\n"+
                "3:相手モンスター破壊\n"+
                "4:相手LP-1000"
            );



            if(choice==="1"){

                drawCard(player,2);

            }


            else if(choice==="2"){

                player.freeSummon = true;

            }


            else if(choice==="3"){

                destroyEnemyMonster(opponent);

            }


            else if(choice==="4"){

                opponent.lp -= 1000;

            }


            break;



        // =================================
        // ネズミ3.57864
        // =================================

        case "ネズミ3.57864":


            // SAは召喚処理側で管理

            console.log(
                "ネズミ3.57864：SA"
            );


            break;




        // =================================
        // ニャルラトホテプ
        // =================================

        case "ニャルラトホテプ":


            /*
             * このカードは特殊
             *
             * ・別カードとして召喚可能
             * ・ATKと効果は変化しない
             * ・場にいる場合2枚ドロー
             *
             */


            drawCard(player,2);



            console.log(
                "ニャルラトホテプ：2枚ドロー"
            );


            break;



        default:


            console.log(
                "効果未登録:",
                card.name
            );


    }

}

// =================================
// また0から
// =================================

case "また0から":

    player.field.cards = [];
    opponent.field.cards = [];

    player.hand = [];
    opponent.hand = [];

    player.deck =
        shuffle(player.deck);

    opponent.deck =
        shuffle(opponent.deck);

    drawCard(player,5);
    drawCard(opponent,5);

    console.log("また0から：ゲームをリセット");

    break;



// =================================
// 五輪書
// =================================

case "五輪書":

    player.atkBuff += 500;

    drawCard(player,1);

    console.log(
        "五輪書：剣・刀カードATK+500"
    );

    break;



// =================================
// 墓地送り
// =================================

case "墓地送り":


    let sendCard =
        player.deck.pop();


    player.grave.push(sendCard);



    destroyEnemyCostCard(
        opponent,
        7
    );


    console.log(
        "墓地送り：カードを墓地へ送った"
    );


    break;



// =================================
// イソナ
// =================================

case "イソナ":


    opponent.field.monsters
    .forEach(monster=>{

        monster.atk -= 2000;

    });


    console.log(
        "イソナ：敵全体ATK-2000"
    );


    break;



// =================================
// 一般兵士
// =================================

case "一般兵士":


    player.summonGunCard = true;


    console.log(
        "一般兵士：銃カード召喚可能"
    );


    break;



// =================================
// クトゥルフ
// =================================

case "クトゥルフ":


    card.effectDestroyImmune = true;


    console.log(
        "クトゥルフ：効果破壊無効"
    );


    break;



// =================================
// ルルイエ
// =================================

case "ルルイエ":


    player.cthulhuProtect = true;


    console.log(
        "ルルイエ：クトゥルフ保護"
    );


    break;



// =================================
// 書を食らう悪魔バエル
// =================================

case "書を食らう悪魔バエル":


    if(player.grave.length >= 3){


        removeMagicCards(
            player,
            3
        );


        card.atk += 1000;


    }


    console.log(
        "バエル：ATK上昇"
    );


    break;



// =================================
// 異界の聖槍ロンギヌス
// =================================

case "異界の聖槍ロンギヌス":


    destroyEnemyCard(
        opponent
    );


    card.leaveDamage = 500;


    console.log(
        "ロンギヌス：相手カード破壊"
    );


    break;



// =================================
// 機械仕掛けの鳥
// =================================

case "機械仕掛けの鳥":


    let cardToGrave =
        player.deck.shift();


    player.grave.push(
        cardToGrave
    );


    drawCard(
        player,
       1
    );


    sendToGrave(
        player,
       card
    );


    console.log(
        "機械仕掛けの鳥：墓地送り＋ドロー"
    );


    break;

// =================================
// 効果エンジン Part2
// =================================



// =================================
// デッキシャッフル
// =================================

function shuffle(deck){


    let result = [...deck];


    for(let i=result.length-1;i>0;i--){


        let j =
        Math.floor(
            Math.random()*(i+1)
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


        player.grave.push(target);


        console.log(
            target.name+"を破壊"
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
        card=>card.cost>=cost
    );


    if(target){


        let index =
        player.field.cards.indexOf(target);


        player.field.cards.splice(
            index,
            1
        );


        player.grave.push(target);


        console.log(
            target.name+"を破壊"
        );

    }


}




// =================================
// 魔法カード除外
// =================================

function removeMagicCards(
    player,
    amount
){


    let count=0;


    player.grave =
    player.grave.filter(card=>{


        if(
            card.type==="spell"
            &&
            count<amount
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


    player.field.cards
    .forEach(card=>{


        player.grave.push(card);


    });


    player.field.cards=[];


    player.field.monsters=[];


    player.field.traps=[];


}


// =================================
// 星読の巫女ミラ
// =================================

case "星読の巫女ミラ":


    let topCards =
        player.deck.splice(0,3);


    let select =
        topCards.shift();


    player.hand.push(select);


    player.deck.unshift(
        ...topCards
    );


    player.magicCostDown = true;


    console.log(
        "ミラ：デッキ操作＋魔法コスト軽減"
    );


    break;



// =================================
// 深淵の監視者ネフシュタン
// =================================

case "深淵の監視者ネフシュタン":


    player.nephEffect = true;


    card.onGraveEffect =
    function(){

        drawCard(player,1);

    };


    console.log(
        "ネフシュタン：条件効果を登録"
    );


    break;



// =================================
// 見えざる手の取引
// =================================

case "見えざる手の取引":


    let discard =
        player.hand.splice(0,2);


    player.grave.push(
        ...discard
    );


    drawCard(
        player,
        3
    );


    let monsterCount =
        discard.filter(
            c=>c.type==="monster"
        ).length;


    if(monsterCount>0){

        drawCard(
            player,
            monsterCount
        );

    }


    damage(
        player,
        discard.length*500
    );


    console.log(
        "見えざる手の取引：手札交換"
    );


    break;



// =================================
// 封印の箱パンドラ
// =================================

case "封印の箱パンドラ":


    heal(
        player,
        800
    );


    player.disableGraveEffect = 2;

    opponent.disableGraveEffect = 2;


    console.log(
        "パンドラ：墓地効果封印"
    );


    break;



// =================================
// 転生の花弁
// =================================

case "転生の花弁":


    let graveMonster =
        player.grave.find(
            c=>c.type==="monster"
        );


    if(graveMonster){


        player.grave.splice(
            player.grave.indexOf(graveMonster),
            1
        );


        player.hand.push(
            graveMonster
        );


    }


    console.log(
        "転生の花弁：墓地回収"
    );


    break;



// =================================
// 光の残響
// =================================

case "光の残響":


    card.destroyTrigger =
    function(count){


        damage(
            opponent,
            count*400
        );


        drawCard(
            player,
            1
        );


    };


    console.log(
        "光の残響：破壊反応セット"
    );


    break;



// =================================
// 夢見の狭間
// =================================

case "夢見の狭間":


    player.coinEffect = true;


    console.log(
        "夢見の狭間：ドロー時コイントス"
    );


    break;



// =================================
// 炎輪の祈り
// =================================

case "炎輪の祈り":


    let reviveTarget =
        player.grave.find(
            c=>c.type==="monster"
        );


    if(reviveTarget){


        summonMonster(
            player,
            reviveTarget
        );


        reviveTarget.atk =
        Math.floor(
            reviveTarget.atk/2
        );


        card.endDestroy = true;


    }


    console.log(
        "炎輪の祈り：墓地蘇生"
    );


    break;

// =================================
// カワウソ
// =================================

case "カワウソ":

    card.blockerIgnore = true;

    console.log(
        "カワウソ：ブロッカー無効"
    );

    break;



// =================================
// 桜の精霊
// =================================

case "桜の精霊":


    heal(
        player,
        1500
    );


    player.field.monsters
    .forEach(monster=>{

        monster.atk += 500;

    });


    opponent.field.monsters
    .forEach(monster=>{

        monster.atk -= 250;

    });


    if(player.lp <= 1000){


        reviveRandomMonster(
            player,
            2
        );


    }


    console.log(
        "桜の精霊：全体強化"
    );


    break;



// =================================
// 回福の魔女
// =================================

case "回福の魔女":


    heal(
        player,
        800
    );


    drawCard(
        player,
        1
    );


    card.returnToHand = true;


    console.log(
        "回福の魔女：回復＋ドロー"
    );


    break;



// =================================
// 小夜峰綾香
// =================================

case "小夜峰綾香":


    card.disableHighCost = true;


    card.highCostBattleBoost = true;


    console.log(
        "小夜峰綾香：高コスト対策"
    );


    break;



// =================================
// 堕落マネネ
// =================================

case "堕落マネネ":


    card.effectDestroyImmune = true;

    card.blocker = true;


    console.log(
        "堕落マネネ：破壊耐性＋ブロッカー"
    );


    break;



// =================================
// 気付いたらいたライオン
// =================================

case "気付いたらいたライオン":


    card.cost += 1;


    console.log(
        "気付いたらいたライオン：コスト増加"
    );


    break;



// =================================
// 蓮の葉ハスター
// =================================

case "蓮の葉ハスター":


    heal(
        player,
        500
    );


    player.targetProtection = true;


    console.log(
        "ハスター：対象耐性付与"
    );


    break;



// =================================
// 本体はパンダである模様
// =================================

case "本体はパンダである模様":


    card.attackNullify = true;


    console.log(
        "パンダ：攻撃無効化セット"
    );


    break;


// =================================
// 奔華片名代
// =================================

case "奔華片名代":


    card.blocker = true;


    card.replaceDestroy = true;


    console.log(
        "奔華片名代：身代わり破壊可能"
    );


    break;




// =================================
// 雲盧之譜アリス
// =================================

case "雲盧之譜アリス":


    card.aliceDamage = function(){


        damage(
            player,
            500
        );


        damage(
            opponent,
            1500
        );


    };



    card.lpEffectCancel = true;


    console.log(
        "アリス：LP操作効果登録"
    );


    break;




// =================================
// 世界の滅亡
// =================================

case "世界の滅亡":


    if(
        player.hasCthulhu
        &&
        player.hasRlyeh
        &&
        player.cthulhuTurn >= 2
    ){


        opponent.lose = true;


        console.log(
            "世界の滅亡：特殊勝利"
        );


    }

    else{


        console.log(
            "条件未達"
        );


    }


    break;




// =================================
// いつの日かの飛鉄「佐貫」
// =================================

case "いつの日かの飛鉄「佐貫」":


    if(
        opponent.field.monsters.length > 0
    ){


        let target =
        opponent.field.monsters[0];


        target.atk -= 1500;


        if(target.atk <= 0){


            destroyMonster(
                opponent,
                target
            );


        }


    }


    console.log(
        "佐貫：敵モンスター弱体化"
    );


    break;




// =================================
// 黒き刃
// =================================

case "黒き刃":


    destroyEnemyMonster(
        opponent
    );


    console.log(
        "黒き刃：モンスター破壊"
    );


    break;




// =================================
// ユリカ
// =================================

case "ユリカ":


    player.canSummonAnimal = true;


    console.log(
        "ユリカ：動物召喚可能"
    );


    break;




// =================================
// ラーツ・グローブ
// =================================

case "ラーツ・グローブ":


    card.onGraveEffect =
    function(){


        drawCard(
            player,
            1
        );


    };


    console.log(
        "ラーツ・グローブ：墓地効果登録"
    );


    break;

// =================================
// シュラフ・アリーナ
// =================================

case "シュラフ・アリーナ":


    // 召喚時：相手フィールド全破壊

    destroyAllCards(
        opponent
    );


    // このターン攻撃不可

    player.cannotAttack = true;


    // 効果無効回数

    card.nullifyCount = 2;


    // 手札確認能力

    card.canViewHand = true;


    console.log(
        "シュラフ・アリーナ：盤面破壊"
    );


    break;




// =================================
// F1
// =================================

case "F1":


    // コスト3以下特殊召喚権

    player.lowCostSummon = true;



    // 破壊時効果

    card.onDestroy =
    function(){


        destroyEnemyCard(
            opponent
        );


    };


    console.log(
        "F1：追加召喚＋破壊時効果"
    );


    break;




// =================================
// 爆マネネ
// =================================

case "爆マネネ":


    card.selfDestruct =
    function(){


        destroyAllCards(
            player
        );


        destroyAllCards(
            opponent
        );


        damage(
            opponent,
            1000
        );


    };


    console.log(
        "爆マネネ：自爆効果準備"
    );


    break;




// =================================
// ケニファー
// =================================

case "ケニファー":


    addCost(
        player,
        1
    );


    heal(
        player,
        700
    );


    console.log(
        "ケニファー：コスト＋1 LP回復"
    );


    break;




// =================================
// マネネ
// =================================

case "マネネ":


    damage(
        opponent,
        800
    );


    console.log(
        "マネネ：800ダメージ"
    );


    break;




// =================================
// 黒九尾
// =================================

case "黒九尾":


    let sacrifice =
        player.field.cards.length;


    if(sacrifice > 0){


        player.field.cards
        .forEach(card=>{


            player.grave.push(card);


        });


        player.field.cards=[];


        card.atk +=
        sacrifice*200;


    }



    card.destroyAbility =
    function(){


        destroyLowCostCard(
            opponent,
            6
        );


    };


    console.log(
        "黒九尾：墓地利用強化"
    );


    break;




// =================================
// ドラゴン
// =================================

case "ドラゴン":


    card.cannotSpecialSummon = true;

    card.untargetable = true;


    console.log(
        "ドラゴン：対象耐性"
    );


    break;




// =================================
// ハッキング
// =================================

case "ハッキング":


    let target =
    opponent.field.monsters.find(
        monster=>monster.cost<=7
    );


    if(target){


        target.owner =
        player;


        console.log(
            target.name+"を奪取"
        );


    }


    console.log(
        "ハッキング：コントロール奪取"
    );


    break;

// =================================
// 八影月輪
// =================================

case "八影月輪":


    player.bladeSummon = true;


    player.allSummonSA = true;


    card.bladeBattleEffect = true;


    console.log(
        "八影月輪：刃物カード強化"
    );


    break;




// =================================
// 鎖縛の神・バロール
// =================================

case "鎖縛の神・バロール":


    if(
        opponent.field.monsters.length > 0
    ){

        let target =
        opponent.field.monsters[0];


        target.cannotAct = true;


        target.cannotActTurn = 1;

    }


    console.log(
        "バロール：モンスター封印"
    );


    break;




// =================================
// 永遠の追放者エリシオン
// =================================

case "永遠の追放者エリシオン":


    card.onceRevive = true;


    console.log(
        "エリシオン：墓地復活効果登録"
    );


    break;




// =================================
// 冥界の呼び声
// =================================

case "冥界の呼び声":


    let count =
    player.grave.filter(
        card=>card.type==="monster"
    ).length;


    player.grave
    .filter(
        card=>card.type==="monster"
    )
    .forEach(monster=>{


        summonMonster(
            player,
            monster
        );


    });


    for(let i=0;i<count;i++){


        if(player.hand.length>0){

            player.deck.push(
                player.hand.pop()
            );

        }

    }


    console.log(
        "冥界の呼び声：墓地展開"
    );


    break;




// =================================
// 静寂の剣士ジーク
// =================================

case "静寂の剣士ジーク":


    card.magicTrapImmune = true;


    console.log(
        "ジーク：魔法罠耐性"
    );


    break;




// =================================
// 深海の乙女ネレイデス
// =================================

case "深海の乙女ネレイデス":


    for(
        let i=0;
        i<2;
        i++
    ){

        if(player.grave.length>0){

            let returnCard =
            player.grave.shift();


            player.deck.push(
                returnCard
            );

        }

    }


    heal(
        player,
        500
    );


    console.log(
        "ネレイデス：墓地回収＋回復"
    );


    break;




// =================================
// 白翼の大天使ラファエル
// =================================

case "白翼の大天使ラファエル":


    heal(
        player,
        1000
    );


    drawCard(
        player,
        1
    );


    console.log(
        "ラファエル：回復＋ドロー"
    );


    break;




// =================================
// 黄泉の渡り鳥アストレア
// =================================

case "黄泉の渡り鳥アストレア":


    if(
        player.hand.length>0
    ){

        player.grave.push(
            player.hand.shift()
        );

    }


    drawCard(
        player,
        2
    );


    console.log(
        "アストレア：手札交換"
    );


    break;




// =================================
// 狩猟神アルテミス
// =================================

case "狩猟神アルテミス":


    summonToken(
        player,
        {
            name:"狩猟トークン",
            atk:800
        }
    );


    summonToken(
        player,
        {
            name:"狩猟トークン",
            atk:800
        }
    );


    console.log(
        "アルテミス：トークン2体召喚"
    );


    break;
