intro = () => {
    console.log("hello world");
}
intro();

intro2 = () => console.log("hi");
intro2();

/*-----------1.2-----------------*/

halloFunction = () => {
    document.write("Hallo");
}
halloFunction();

ziffern = () => {
    let x = 2;
    let y = 3;
    console.log(x + y);
    return ziffern;
}
ziffern();

/*para = () => {
    let i = true;
    let j = "hi";
    let k = 1;
    let l = { name: "John" };
    let a = [0, 1];
    return para;
}
para();*/ // ???

/*-------1.4-------------------*/

let hero = (heroName, heroPower, heroEnemy) => {
    let name = ("Mein Lieblingsheld aus Marvel ist:" + heroName);
    let power = ("Er/Sie hat Fähigkeit:" + heroPower);
    let enemy = ("Sein/Ihr größter Gegner ist:" + heroEnemy);
    console.log(name + power + enemy);
}
hero("Hulk", "Laseraugen", "Venom");

/*---------1.6-----------------*/

let x = 1;
let y = 1;

let returnOne = () => {
    if (x === y) {
        console.log("Wird das gedruckt?");
    }
    return 1;
}
returnOne();

/*---------1.7------------*/

let double = (a) => {
    return (a * 2);
}

console.log(double); //?

/*---------1.8------------*/

let aktuell = 2022;

let yearBorn = (gb) => {
    gb = 1985;
    console.log(aktuell - gb);
    return (aktuell - gb);
}
yearBorn();

/*
let yearBorn2 = (alter1, alter2) => {
    alter1 = 37;
    alter2 = 26;
    let alterDiff = alter1 - alter2;
    return alterDiff;
}
math.abs (muss ich nochmal genauer schauen)
console.log();*/ //?

/*-----------1.9---------*/

let ich = (vorname, nachname, geburtsort, alter, wohnort) => {
    let name = (" Mein Name ist " + vorname + nachname);
    let geboren = (" Ich bin in " + geburtsort + "gboren.");
    let code = (" Ich lerne Coden bei SuperCode. ");
    let jahre = (" Ich bin " + alter + " Jahre alt. ");
    let wohne = (" Ich wohne in " + wohnort);
    console.log(name + geboren + code + jahre + wohne);
}
ich(" Elias ", " Fredoni ", " Wuppertal ", " 37 ", " Wuppertal ");