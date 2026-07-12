// =================================
// バトル処理 Part1
// 基本戦闘
// =================================



// =================================
// 攻撃宣言
// =================================

function attack(attackerPlayer, attacker, targetPlayer, target){


    // 攻撃済み確認

    if(attacker.attacked){

        console.log(
            "このモンスターは攻撃済み"
        );

        return;

    }



    // 召喚酔い確認

    if(
        attacker.summonTurn === turnCount
        &&
        !attacker.SA
    ){

        console.log(
            "召喚酔い中"
        );

        return;

    }



    attacker.attacked = true;



    // 相手モンスターなし

    if(!target){


        directAttack(
            attackerPlayer,
            targetPlayer,
            attacker
        );


        return;

    }



    // モンスター戦闘

    monsterBattle(
        attackerPlayer,
        attacker,
        targetPlayer,
        target
    );


}





// =================================
// 直接攻撃
// =================================

function directAttack(
    attackerPlayer,
    targetPlayer,
    monster
){


    targetPlayer.lp -= monster.atk;


    console.log(
        monster.name+
        "が直接攻撃"
    );


}





// =================================
// モンスター戦闘
// =================================

function monsterBattle(
    attackerPlayer,
    attacker,
    defenderPlayer,
    defender
){


    let difference =
    attacker.atk - defender.atk;



    if(difference > 0){


        // 攻撃側勝利

        destroyMonster(
            defenderPlayer,
            defender
        );


        defenderPlayer.lp -= difference;


    }


    else if(difference < 0){


        // 防御側勝利


        destroyMonster(
            attackerPlayer,
            attacker
        );


        attackerPlayer.lp -=
        Math.abs(difference);


    }


    else{


        // 同値なら両方破壊


        destroyMonster(
            attackerPlayer,
            attacker
        );


        destroyMonster(
            defenderPlayer,
            defender
        );


    }


}

// =================================
// バトル処理 Part2
// 能力処理
// =================================




// =================================
// 攻撃可能判定
// =================================

function canAttack(monster){


    // すでに攻撃済み

    if(monster.attacked){

        return false;

    }



    // 召喚ターン確認

    if(
        monster.summonTurn === turnCount
        &&
        !monster.SA
    ){

        return false;

    }



    return true;

}





// =================================
// ブロッカー処理
// =================================

function checkBlocker(
    defenderPlayer,
    attackerTarget
){


    let blocker =
    defenderPlayer.field.monsters.find(
        monster=>monster.blocker
    );


    if(blocker){


        console.log(
            blocker.name+
            "が攻撃を受ける"
        );


        return blocker;

    }


    return attackerTarget;

}





// =================================
// 破壊処理確認
// =================================

function canDestroy(card){


    // 効果破壊無効

    if(card.effectDestroyImmune){

        return false;

    }



    return true;

}





// =================================
// 戦闘破壊処理
// =================================

function battleDestroy(
    player,
    monster
){


    if(
        !canDestroy(monster)
    ){

        console.log(
            monster.name+
            "は破壊されない"
        );


        return;

    }



    destroyMonster(
        player,
        monster
    );


}





// =================================
// 破壊身代わり
// =================================

function replaceDestroy(
    player,
    monster
){


    let replacement =
    player.field.monsters.find(
        card=>
        card!==monster
        &&
        card.replaceDestroy
    );



    if(replacement){


        destroyMonster(
            player,
            replacement
        );


        console.log(
            monster.name+
            "の破壊を肩代わり"
        );


        return true;

    }



    return false;

}

// =================================
// バトル処理 Part3
// 破壊イベント処理
// =================================




// =================================
// 破壊処理（改良版）
// =================================

function destroyWithEvent(
    player,
    card
){



    // 破壊耐性確認

    if(
        !canDestroy(card)
    ){

        console.log(
            card.name+
            "は破壊されない"
        );

        return;

    }



    // 身代わり確認

    if(
        replaceDestroy(
            player,
            card
        )
    ){

        return;

    }



    // フィールドから削除

    let index =
    player.field.monsters.indexOf(card);



    if(index !== -1){


        player.field.monsters.splice(
            index,
            1
        );

    }



    // 墓地へ

    player.grave.push(card);



    console.log(
        card.name+
        "を墓地へ送った"
    );



    // 墓地効果

    activateGraveEffect(
        card,
        player
    );



    // 破壊時効果

    if(card.onDestroy){


        card.onDestroy();

    }


}






// =================================
// 墓地効果処理
// =================================

function activateGraveEffect(
    card,
    player
){


    if(
        card.onGraveEffect
    ){


        card.onGraveEffect();


    }

}






// =================================
// LPチェック
// =================================

function checkBattleEnd(
    player,
    opponent
){


    let winner =
    checkVictory(
        player,
        opponent
    );



    if(winner){


        console.log(
            "勝者:",
            winner.name
        );


        return true;

    }


    return false;

}

// =================================
// バトル処理 Part4
// 戦闘完成処理
// =================================




// =================================
// 攻撃回数設定
// =================================

function setAttackCount(monster){


    if(monster.attackCount === undefined){

        monster.attackCount = 1;

    }

}






// =================================
// SA確認
// =================================

function applySA(monster){


    if(monster.SA){


        monster.summonTurn = -1;


    }

}






// =================================
// 攻撃対象決定
// =================================

function selectAttackTarget(
    attackerPlayer,
    defenderPlayer
){


    let target = null;



    // ブロッカー優先

    target =
    checkBlocker(
        defenderPlayer,
        null
    );



    // ブロッカーなし

    if(!target){


        if(
            defenderPlayer.field.monsters.length > 0
        ){

            target =
            defenderPlayer.field.monsters[0];

        }

    }



    return target;

}






// =================================
// 戦闘開始
// =================================

function startBattle(
    attackerPlayer,
    defenderPlayer,
    attacker
){


    setAttackCount(attacker);



    if(
        attacker.attackCount <= 0
    ){

        console.log(
            "攻撃回数なし"
        );

        return;

    }



    let target =
    selectAttackTarget(
        attackerPlayer,
        defenderPlayer
    );



    if(target){


        monsterBattle(
            attackerPlayer,
            attacker,
            defenderPlayer,
            target
        );


    }

    else{


        directAttack(
            attackerPlayer,
            defenderPlayer,
            attacker
        );


    }



    attacker.attackCount--;



    console.log(
        attacker.name+
        "の攻撃終了"
    );


}






// =================================
// ターン開始時攻撃回数リセット
// =================================

function resetAttackCount(player){


    player.field.monsters
    .forEach(monster=>{


        monster.attackCount = 1;


    });

}
