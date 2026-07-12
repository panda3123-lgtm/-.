// =================================
// カード画像設定
// =================================

function getCardImage(name){

    // 雲盧之譜アリスだけPNG

    if(name === "雲盧之譜アリス"){

        return "images/cards/"
        + name
        + ".png.PNG";

    }


    // その他すべて

    return "images/cards/"
    + name
    + ".jpg.JPG";

}





// =================================
// 制限枚数
// =================================

function getCardLimit(name){


    if(
        name === "これあげる" ||
        name === "小夜峰綾香" ||
        name === "シュラフ・アリーナ"
    ){

        return 1;

    }



    if(name === "ネズミ3.57864"){

        return 2;

    }



    return 3;

}





// =================================
// カード一覧
// =================================

const cards = [

// =================================
// カードデータ Part2
// =================================


{
    id:"jiei_you_pistol",

    name:"自衛用拳銃",

    image:getCardImage("自衛用拳銃"),

    type:"trap",

    cost:1,

    atk:0,

    color:"白",

    text:
    "コスト3以下のカードが自分にダメージを与える前に発動する。そのカードの効果を無効化し破壊する。その後、相手プレイヤーに500ダメージ与える。",

    limit:getCardLimit("自衛用拳銃")
},



{
    id:"mask",

    name:"仮面は正体を隠すもの",

    image:getCardImage("仮面は正体を隠すもの"),

    type:"spell",

    cost:2,

    atk:0,

    color:"緑",

    text:
    "モンスターを召喚する前に発動できる。このカードを使った後、1回のみ、自分はカードを裏向きで召喚する事ができる。コストの踏み倒しは不可。",

    limit:getCardLimit("仮面は正体を隠すもの")
},



{
    id:"sanpai",

    name:"参拝",

    image:getCardImage("参拝"),

    type:"spell",

    cost:1,

    atk:0,

    color:"青",

    text:
    "自分のLPを+500する。",

    limit:getCardLimit("参拝")
},



{
    id:"koreageru",

    name:"これあげる",

    image:getCardImage("これあげる"),

    type:"spell",

    cost:3,

    atk:0,

    color:"ピンク",

    text:
    "自分の手札のうち好きなカードを2枚選び手札に加え、山札からカードを2枚ドローする。そして以下の効果の内、一つを選び発動する。",

    limit:getCardLimit("これあげる")
},



{
    id:"nezumi",

    name:"ネズミ3.57864",

    image:getCardImage("ネズミ3.57864"),

    type:"monster",

    cost:1,

    atk:500,

    color:"青",

    ability:[
        "SA"
    ],

    text:
    "SA（速攻攻撃）",

    limit:getCardLimit("ネズミ3.57864")
},



{
    id:"nyarlathotep",

    name:"ニャルラトホテプ",

    image:getCardImage("ニャルラトホテプ"),

    type:"monster",

    cost:10,

    atk:4500,

    color:"紫",

    text:
    "このカードは召喚時、手札の別カードとして召喚して良い（ただし効果やATKは変わらない）。このカードが別のカードとしてでも自分の場にいる場合使える。山札からカードを2枚ドローする。",

    limit:getCardLimit("ニャルラトホテプ")
},



{
    id:"mata0kara",

    name:"また0から",

    image:getCardImage("また0から"),

    type:"spell",

    cost:10,

    atk:0,

    color:"青",

    text:
    "お互いのカードを全て山札に戻し、お互いはカードを5枚ドローする。",

    limit:getCardLimit("また0から")
},



{
    id:"gorinsho",

    name:"五輪書",

    image:getCardImage("五輪書"),

    type:"spell",

    cost:5,

    atk:0,

    color:"グレー",

    text:
    "次のターンの終わりまで、自分の刀や剣を持っているキャラがイラストにいるカードのATKは+500される。そしてカードを1枚ドローする。",

    limit:getCardLimit("五輪書")
},



{
    id:"hakuchisend",

    name:"墓地送り",

    image:getCardImage("墓地送り"),

    type:"monster",

    cost:4,

    atk:2000,

    color:"黒",

    text:
    "召喚時、自分のデッキから好きなカードを墓地に送り、相手のコスト7以上のカードを破壊する。",

    limit:getCardLimit("墓地送り")
},



{
    id:"isona",

    name:"イソナ",

    image:getCardImage("イソナ"),

    type:"monster",

    cost:8,

    atk:2000,

    color:"ピンク",

    text:
    "召喚時、相手の場のモンスターカード全てのATKを-2000する。",

    limit:getCardLimit("イソナ")
},

// =================================
// カードデータ Part3
// =================================


{
    id:"yarinaoshi",

    name:"やり直し",

    image:getCardImage("やり直し"),

    type:"spell",

    cost:1,

    atk:0,

    color:"グレー",

    text:
    "自分のカードを全て山札に戻し、5枚ドローする。",

    limit:getCardLimit("やり直し")
},



{
    id:"ippan_heishi",

    name:"一般兵士",

    image:getCardImage("一般兵士"),

    type:"monster",

    cost:4,

    atk:1600,

    color:"黒",

    text:
    "このカードが墓地に送られた場合に発動できる。墓地にある銃を持っているキャラのイラストのカード（現時点は、自衛用拳銃、マネネ、爆マネネ、次回策の5つ）をコストを使わず召喚、発動できる。",

    limit:getCardLimit("一般兵士")
},



{
    id:"cthulhu",

    name:"クトゥルフ",

    image:getCardImage("クトゥルフ"),

    type:"monster",

    cost:10,

    atk:3500,

    color:"紫",

    text:
    "このカードは効果による破壊を受け付けない。",

    limit:getCardLimit("クトゥルフ")
},



{
    id:"rlyeh",

    name:"ルルイエ",

    image:getCardImage("ルルイエ"),

    type:"spell",

    cost:3,

    atk:0,

    color:"青",

    text:
    "このカードがある限り、「クトゥルフ」は効果により破壊されなくなる。",

    limit:getCardLimit("ルルイエ")
},



{
    id:"bael",

    name:"書を食らう悪魔バエル",

    image:getCardImage("書を食らう悪魔バエル"),

    type:"monster",

    cost:8,

    atk:3000,

    color:[
        "紫",
        "ピンク"
    ],

    text:
    "自分の墓地の魔法カードを3枚除去することにより、このカードのATKを+1000できる。",

    limit:getCardLimit("書を食らう悪魔バエル")
},



{
    id:"longinus",

    name:"異界の聖槍ロンギヌス",

    image:getCardImage("異界の聖槍ロンギヌス"),

    type:"monster",

    cost:7,

    atk:2500,

    color:[
        "オレンジ",
        "黄色"
    ],

    text:
    "召喚時、相手の場のカードを1枚破壊する。このカードが破壊された場合、相手のLPを-500する。",

    limit:getCardLimit("異界の聖槍ロンギヌス")
},



{
    id:"kikai_bird",

    name:"機械仕掛けの鳥",

    image:getCardImage("機械仕掛けの鳥"),

    type:"monster",

    cost:1,

    atk:300,

    color:"黄色",

    text:
    "召喚時、デッキから1枚カードを墓地に送り、1枚カードをドローし、このカードを墓地に送る。",

    limit:getCardLimit("機械仕掛けの鳥")
},



{
    id:"mira",

    name:"星読の巫女ミラ",

    image:getCardImage("星読の巫女ミラ"),

    type:"monster",

    cost:6,

    atk:2000,

    color:[
        "紫",
        "ピンク"
    ],

    text:
    "召喚時、デッキの上から3枚を確認し、その内1枚を手札に加え後の2枚を好きな順番で山札の上に置く。このカードが場にある場合、魔法カードのコストを-1する。",

    limit:getCardLimit("星読の巫女ミラ")
},



{
    id:"nephshutan",

    name:"深淵の監視者ネフシュタン",

    image:getCardImage("深淵の監視者ネフシュタン"),

    type:"monster",

    cost:8,

    atk:3600,

    color:"黒",

    text:
    "自分のLPが相手より低い場合、ターン開始時に相手の場のカード1枚を破壊。この効果発動後、自分のLPを300回復。墓地に送られた時、1ドロー。",

    limit:getCardLimit("深淵の監視者ネフシュタン")
},

// =================================
// カードデータ Part4
// =================================


{
    id:"miezaru_te",

    name:"見えざる手の取引",

    image:getCardImage("見えざる手の取引"),

    type:"spell",

    cost:3,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    text:
    "手札を2枚墓地に送り、カードを3枚ドローする。捨てたカードにモンスターが含まれてた場合、捨てたカードに含まれていたモンスターの数×1枚さらにカードをドローし、捨てたカードに含まれていたカード×500ポイント分自分のLPにダメージを与える。",

    limit:getCardLimit("見えざる手の取引")
},



{
    id:"pandora",

    name:"封印の箱パンドラ",

    image:getCardImage("封印の箱パンドラ"),

    type:"spell",

    cost:4,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    text:
    "発動時、LPを800回復し、お互いの墓地からの効果を2ターン無効化する。",

    limit:getCardLimit("封印の箱パンドラ")
},



{
    id:"tensei_no_hana",

    name:"転生の花弁",

    image:getCardImage("転生の花弁"),

    type:"spell",

    cost:2,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    text:
    "発動時、自分の墓地にあるモンスターを相手に見せて手札に加える。",

    limit:getCardLimit("転生の花弁")
},



{
    id:"hikari_no_zankyo",

    name:"光の残響",

    image:getCardImage("光の残響"),

    type:"trap",

    cost:4,

    atk:0,

    color:[
        "黄色",
        "オレンジ"
    ],

    text:
    "自分の場のカードが破壊された場合に使える。破壊されたカードの枚数×400ダメージを相手のLPに与える。その後、カードを1枚ドローする。",

    limit:getCardLimit("光の残響")
},



{
    id:"yumemi_no_hazama",

    name:"夢見の狭間",

    image:getCardImage("夢見の狭間"),

    type:"spell",

    cost:5,

    atk:0,

    color:[
        "紫",
        "ピンク"
    ],

    text:
    "お互いのドロー時、コイントスをする。表：ドロー+1。裏：墓地から1枚カードをランダムに山札に戻す。この魔法は発動時に破壊されない。",

    limit:getCardLimit("夢見の狭間")
},



{
    id:"enrin_no_inori",

    name:"炎輪の祈り",

    image:getCardImage("炎輪の祈り"),

    type:"spell",

    cost:4,

    atk:0,

    color:[
        "赤",
        "オレンジ"
    ],

    text:
    "墓地のモンスターを1体、ATKを半減して場に出す。ターンエンド時にこのカードの効果により召喚されたカードを破壊し、相手に500ダメージ与える。",

    limit:getCardLimit("炎輪の祈り")
},



{
    id:"kawauso",

    name:"カワウソ",

    image:getCardImage("カワウソ"),

    type:"monster",

    cost:4,

    atk:1800,

    color:"水色",

    text:
    "ブロッカー無効。",

    limit:getCardLimit("カワウソ")
},



{
    id:"sakura_no_seirei",

    name:"桜の精霊",

    image:getCardImage("桜の精霊"),

    type:"monster",

    cost:10,

    atk:2100,

    color:"ピンク",

    text:
    "このカードが場に出たとき、以下の効果をすべて発動する。①味方全体のLPを1500回復する。②味方全体のATK+500（2ターン持続）。③相手の場に出ているモンスターのATKをすべて-250（2ターン持続）。自分のLPが1000以下のときにこのカードを出した場合、味方の墓地からランダムで2体のモンスターカードを特殊召喚させる。",

    limit:getCardLimit("桜の精霊")
},

// =================================
// カードデータ Part6
// =================================


{
    id:"sekai_no_metsubo",

    name:"世界の滅亡",

    image:getCardImage("世界の滅亡"),

    type:"spell",

    cost:10,

    atk:0,

    color:"緑",

    text:
    "「クトゥルフ」の召喚されてから往復2ターン経っており、ルルイエが自分の場にある場合のみ使える。自分はゲームに勝利する。",

    limit:getCardLimit("世界の滅亡")
},



{
    id:"sanuki",

    name:"いつの日かの飛鉄「佐貫」",

    image:getCardImage("いつの日かの飛鉄「佐貫」"),

    type:"monster",

    cost:5,

    atk:2100,

    color:"グレー",

    text:
    "召喚時、相手の場のモンスターを1体選び、そのモンスターのATKを-1500する。",

    limit:getCardLimit("いつの日かの飛鉄「佐貫」")
},



{
    id:"kuroki_yaiba",

    name:"黒き刃",

    image:getCardImage("黒き刃"),

    type:"monster",

    cost:6,

    atk:2100,

    color:"グレー",

    text:
    "召喚時、相手のモンスターを破壊する。",

    limit:getCardLimit("黒き刃")
},



{
    id:"yurika",

    name:"ユリカ",

    image:getCardImage("ユリカ"),

    type:"monster",

    cost:6,

    atk:1600,

    color:"オレンジ",

    text:
    "このカードを召喚したとき、自分の場に一体動物系モンスターを召喚できる。",

    limit:getCardLimit("ユリカ")
},



{
    id:"rarts_glove",

    name:"ラーツ・グローブ",

    image:getCardImage("ラーツ・グローブ"),

    type:"monster",

    cost:6,

    atk:2500,

    color:"赤",

    text:
    "このカードが墓地に送られた時、自分はカードを1枚ドローする。",

    limit:getCardLimit("ラーツ・グローブ")
},



{
    id:"shraf_arena",

    name:"シュラフ・アリーナ",

    image:getCardImage("シュラフ・アリーナ"),

    type:"monster",

    cost:10,

    atk:4900,

    color:"水色",

    text:
    "召喚時、相手の場のカードを全て破壊する。その代わり、自分の場のモンスターはこのターン攻撃できない。また、対戦中2回まで相手カードの効果を無効にできる。さらに自分のターンにコストを1消費することにより、相手の手札を見ることができる。",

    limit:getCardLimit("シュラフ・アリーナ")
},



{
    id:"unmei_ni_aragau",

    name:"運命に抗う",

    image:getCardImage("運命に抗う"),

    type:"spell",

    cost:3,

    atk:0,

    color:"ピンク",

    text:
    "自分の場にあるカードを1枚手札に戻しコストを+1する。",

    limit:getCardLimit("運命に抗う")
},



{
    id:"f1",

    name:"F1",

    image:getCardImage("F1"),

    type:"monster",

    cost:4,

    atk:1600,

    color:"緑",

    text:
    "召喚時、コスト3以下のモンスターを追加でコストを払わずに特殊召喚できる。また、このカードは破壊された場合、好きな相手の場のカードを1枚、墓地へ送る事ができる。",

    limit:getCardLimit("F1")
},



{
    id:"baku_manene",

    name:"爆マネネ",

    image:getCardImage("爆マネネ"),

    type:"monster",

    cost:8,

    atk:2300,

    color:"赤",

    text:
    "この能力は任意で使える。このカードを破壊し、場のカードを全て破壊する。その後相手のLPを-1000する。",

    limit:getCardLimit("爆マネネ")
},



{
    id:"kenifer",

    name:"ケニファー",

    image:getCardImage("ケニファー"),

    type:"monster",

    cost:3,

    atk:1000,

    color:"黄色",

    text:
    "召喚時、コスト+1、LP700回復。",

    limit:getCardLimit("ケニファー")
}

// =================================
// カードデータ Part7
// =================================


{
    id:"hachiei_getsurin",

    name:"八影月輪",

    image:getCardImage("八影月輪"),

    type:"monster",

    cost:10,

    atk:3000,

    color:"グレー",

    text:
    "召喚時、デッキ外から「刃物を持っているイラスト」のカードを特殊召喚。場にいる限り、自分の召喚カード全てにSA（スピードアタッカー）付与。刃物持ちカードとのバトル時、相手ATKを0にする。",

    limit:getCardLimit("八影月輪")
},



{
    id:"barol",

    name:"鎖縛の神・バロール",

    image:getCardImage("鎖縛の神・バロール"),

    type:"monster",

    cost:8,

    atk:2500,

    color:"紫",

    text:
    "召喚時、相手モンスター1体を次のターン終了時まで行動不能にする。",

    limit:getCardLimit("鎖縛の神・バロール")
},



{
    id:"elysion",

    name:"永遠の追放者エリシオン",

    image:getCardImage("永遠の追放者エリシオン"),

    type:"monster",

    cost:5,

    atk:1600,

    color:"青",

    text:
    "墓地に送られた時に発動（対戦中に1回まで）。このカードを自分の場に召喚する。",

    limit:getCardLimit("永遠の追放者エリシオン")
},



{
    id:"meikai_no_yobigoe",

    name:"冥界の呼び声",

    image:getCardImage("冥界の呼び声"),

    type:"spell",

    cost:10,

    atk:0,

    color:"黒",

    text:
    "墓地から任意のモンスターを複数体召喚する。その後、召喚した数だけ手札を山札に戻す。",

    limit:getCardLimit("冥界の呼び声")
},



{
    id:"jiku_no_kenshi",

    name:"静寂の剣士ジーク",

    image:getCardImage("静寂の剣士ジーク"),

    type:"monster",

    cost:5,

    atk:1900,

    color:"青",

    text:
    "魔法・トラップの効果を受けない。",

    limit:getCardLimit("静寂の剣士ジーク")
},



{
    id:"nereides",

    name:"深海の乙女ネレイデス",

    image:getCardImage("深海の乙女ネレイデス"),

    type:"monster",

    cost:6,

    atk:1800,

    color:"青",

    text:
    "召喚時、墓地のカードを2枚デッキに戻し、LPを500回復する。",

    limit:getCardLimit("深海の乙女ネレイデス")
},



{
    id:"raphael",

    name:"白翼の大天使ラファエル",

    image:getCardImage("白翼の大天使ラファエル"),

    type:"monster",

    cost:6,

    atk:2000,

    color:"灰色",

    text:
    "召喚時、LPを1000回復し、カードを1枚ドローする。",

    limit:getCardLimit("白翼の大天使ラファエル")
},



{
    id:"astrea",

    name:"黄泉の渡り鳥アストレア",

    image:getCardImage("黄泉の渡り鳥アストレア"),

    type:"monster",

    cost:3,

    atk:1400,

    color:"黄色",

    text:
    "場に出た時、手札を1枚捨て、カードを2枚ドローする。",

    limit:getCardLimit("黄泉の渡り鳥アストレア")
},



{
    id:"artemis",

    name:"狩猟神アルテミス",

    image:getCardImage("狩猟神アルテミス"),

    type:"monster",

    cost:6,

    atk:2100,

    color:"水色",

    text:
    "召喚時、狩猟トークン（ATK800）を2体召喚する。",

    limit:getCardLimit("狩猟神アルテミス")
}

];

