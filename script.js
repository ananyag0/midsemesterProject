let data;
fetch("https://pokeapi.co/api/v2/pokemon/2")
    .then((resp) => resp.json())
    .then((data)=> allFunctions(data));

let idNum = 1;

allFunctions = (data) => {
    showName(data.name);
    getImage(data.sprites.front_default);
    getTypes(data.types);
    getInfoAndMoves(data);
    getInfo(data);
    getMoves(data.moves);
};

getImage = (image) => {
    // var ul = data.sprites.other.official-artwork.front_default;
    // var ul = data.sprites.front_default;
    //var url = ul.replace("NUM_HERE", im);
    const imageLink = document.getElementById("main-img");
    // console.log(imageLink);
    imageLink.src = image;
    // console.log("here");
};

showName = (name) => {
    // var dn = data.name;
    const nameBox = document.getElementById("name");
    nameBox.textContent = name;
};

getTypes = (data) => {

    if (data.length == 1) {
        const typeBox1 = document.getElementById("type1");
        typeBox1.textContent = data[0].type.name;
        const typeBox2 = document.getElementById("type2");
        typeBox2.textContent = "";

    }
    else if (data.length == 2) {
        const typeBox1 = document.getElementById("type1");
        typeBox1.textContent = data[0].type.name;
        const typeBox2 = document.getElementById("type2");
        typeBox2.textContent = data[1].type.name;
    }
    
}
    // typeBox.textContent = data;
    // data.types.forEach((type) => {
    //     const move = type.type.name;
    //     const type= document.getElementById("type1");

    //     attributes.innerText = move;

// getTypes2 = (data) => {
//     const typeBox = document.getElementById("type2");
//     typeBox.textContent = data;
// }


function getInfoAndMoves(data, x) {
    if (x == "moves") {
        getMoves(data.moves);
    }
    else {
        getInfo(data);
    }
}

getInfo = (data) => {
    const heightField = data.height;
    const weightField = data.weight;
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const special_attack = data.stats[3].base_stat;
    const special_defense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;
    const allFields = ("Height: " + heightField + "\nWeight: " + weightField + "\nhp: " + hp + "\nAttack: " + attack + "\nDefense: " + defense + "\nSpecial Attack: " + special_attack + "\nSpecial Defense: " + special_defense + "\nSpeed: " + speed);
    const attributes = document.getElementById("main-text-box");
    attributes.innerText = allFields;
}


getMoves = (data) => {
    const movesBox = document.getElementById("main-text-box");
   // console.log(data)
    movesBox.innerText = data.reduce((acc, cur)=> acc + cur.move.name + "\n", "");
}
document.getElementById("info-box").addEventListener('click', getInfo());
//// document.getElementById("info-box").addEventListener('click', () => getInfoAndMoves("info", data));
// event listener for info button
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("info-box").addEventListener("click", getInfo);
// });

// document.getElementById("moves-box").addEventListener('click', () => getInfoAndMoves("moves", data));

// event listener for moves button
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("moves-box").addEventListener("click", getMoves);
// });


// new fetch request for left arrow

function newFetchReqLeft() {
    console.log('left')
    if (idNum != 1) {
    idNum = idNum - 1;
    }
    fetch("https://pokeapi.co/api/v2/pokemon/" + idNum).then((resp) => resp.json()).then((data)=> allFunctions(data));
}

// new fetch request for right arrow
function newFetchReqRight() {
    console.log('here')
    idNum = idNum + 1;
    fetch("https://pokeapi.co/api/v2/pokemon/" + idNum).then((resp) => resp.json()).then((data)=> allFunctions(data));
}

// Left arrow event listener
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("left-arrow").addEventListener("click", newFetchReqLeft);
// });

document.getElementById("left-arrow").addEventListener("click", newFetchReqLeft);
document.getElementById("right-arrow").addEventListener("click", newFetchReqRight);

// Right arrow event listener
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById("right-arrow").addEventListener("click", newFetchReqRight);
// });

getImage();
showName();


// infoAndMoves = (data) => {
//     const infoMovesBox = document.getElementById("info-moves-box");
//     if (iM = 1) {
//         infoMovesBox.textContent("nothing here yet");
//     }
//     else {
//         infoMovesBox.
//     }
// }