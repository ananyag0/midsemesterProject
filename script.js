fetch("https://pokeapi.co/api/v2/pokemon/2").then((resp) => resp.json()).then((data)=> allFunctions(data));

// fields needed: height, weight, hp, attack, defense, special-attack, special-defense, speed, image, types, moves

var idNum = 1;

allFunctions = (data) => {
    showName(data.name);
    getImage(data.sprites.front_default);
    // infoAndMoves(data);
    getAttributes(data);
};

showName = (dn) => {
    // var dn = data.name;
    const nameBox = document.getElementById("name");
    nameBox.textContent = dn;
};

getImage = (data) => {
    // var ul = data.sprites.other.official-artwork.front_default;
    // var ul = data.sprites.front_default;
    //var url = ul.replace("NUM_HERE", im);
    const imageLink = document.getElementById("main-img");
    // console.log(imageLink);
    imageLink.src = data;
    // console.log("here");
};

getTypes = (data) => {
    const typeBox = document.getElementById("type");
    typeBox.textContent = data;
}
getAttributes = (data) => {
    const heightField = data.height;
    const weightField = data.weight;
    const hp = data.stats[0].base_stat;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const special_attack = data.stats[3].base_stat;
    const special_defense = data.stats[4].base_stat;
    const speed = data.stats[5].base_stat;

    const allFields = ("Height: " + heightField + "\nWeight: " + weightField + "\nhp: " + hp + "\nAttack: " + attack + "\nDefense: " + defense + "\nSpecial Attack: " + special_attack + "\nSpecial Defense: " + special_defense + "\nSpeed: " + speed);
    const attributes= document.getElementById("attributes");
    attributes.innerText = allFields;
}

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
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("left-arrow").addEventListener("click", newFetchReqLeft);
});


// Right arrow event listener
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("right-arrow").addEventListener("click", newFetchReqRight);
});

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