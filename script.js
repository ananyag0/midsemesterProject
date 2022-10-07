let data;
fetch("https://pokeapi.co/api/v2/pokemon/2").then((resp) => resp.json()).then((data)=> allFunctions(data));
   

let idNum = 1;

allFunctions = (data) => {
    showName(data.name);
    getImage(data.sprites.front_default);
    getTypes(data.types);
    //getInfoAndMoves(data);
    getInfo(data);
    //getMoves(data.moves);
};

getImage = (image) => {
    const imageLink = document.getElementById("main-img");
    imageLink.src = image;
};

showName = (name) => {
    const nameBox = document.getElementById("name");
    nameBox.textContent = name;
};

getTypes = (data) => {

    if (data.length == 1) {
        const typeBox1 = document.getElementById("type1");
        typeBox1.textContent = data[0].type.name;

        if (data[0].type.name == "normal")
            typeBox1.style.backgroundColor = "A8A77A";
        else if (data[0].type.name == "fire")
            typeBox1.style.backgroundColor = "EE8130";
        else if (data[0].type.name == "water")
            typeBox1.style.backgroundColor = "6390F0";
        else if (data[0].type.name == "electric")
            typeBox1.style.backgroundColor = "F7D02C";
        else if (data[0].type.name == "grass")
            typeBox1.style.backgroundColor = "7AC74C";
        else if (data[0].type.name == "ice")
            typeBox1.style.backgroundColor = "96D9D6";
        else if (data[0].type.name == "fighting")
            typeBox1.style.backgroundColor = "C22E28";
        else if (data[0].type.name == "poison")
            typeBox1.style.backgroundColor = "A33EA1";
        else if (data[0].type.name == "ground")
            typeBox1.style.backgroundColor = "E2BF65";
        else if (data[0].type.name == "flying")
            typeBox1.style.backgroundColor = "A98FF3";
        else if (data[0].type.name == "psychic")
            typeBox1.style.backgroundColor = "F95587";
        else if (data[0].type.name == "bug")
            typeBox1.style.backgroundColor = "A6B91A";
        else if (data[0].type.name == "rock")
            typeBox1.style.backgroundColor = "B6A136";
        else if (data[0].type.name == "ghost")
            typeBox1.style.backgroundColor = "735797";
        else if (data[0].type.name == "dragon")
            typeBox1.style.backgroundColor = "6F35FC";
        else if (data[0].type.name == "dark")
            typeBox1.style.backgroundColor = "705746";
        else if (data[0].type.name == "steel")
            typeBox1.style.backgroundColor = "B7B7CE";
        else if (data[0].type.name == "fairy")
            typeBox1.style.backgroundColor = "D685AD";
        const typeBox2 = document.getElementById("type2");
        typeBox2.textContent = "";

    }
    else if (data.length == 2) {
        const typeBox1 = document.getElementById("type1");
        typeBox1.textContent = data[0].type.name;
        
        if (data[0].type.name == "normal")
            typeBox1.style.backgroundColor = "A8A77A";
        else if (data[0].type.name == "fire")
            typeBox1.style.backgroundColor = "EE8130";
        else if (data[0].type.name == "water")
            typeBox1.style.backgroundColor = "6390F0";
        else if (data[0].type.name == "electric")
            typeBox1.style.backgroundColor = "F7D02C";
        else if (data[0].type.name == "grass")
            typeBox1.style.backgroundColor = "7AC74C";
        else if (data[0].type.name == "ice")
            typeBox1.style.backgroundColor = "96D9D6";
        else if (data[0].type.name == "fighting")
            typeBox1.style.backgroundColor = "C22E28";
        else if (data[0].type.name == "poison")
            typeBox1.style.backgroundColor = "A33EA1";
        else if (data[0].type.name == "ground")
            typeBox1.style.backgroundColor = "E2BF65";
        else if (data[0].type.name == "flying")
            typeBox1.style.backgroundColor = "A98FF3";
        else if (data[0].type.name == "psychic")
            typeBox1.style.backgroundColor = "F95587";
        else if (data[0].type.name == "bug")
            typeBox1.style.backgroundColor = "A6B91A";
        else if (data[0].type.name == "rock")
            typeBox1.style.backgroundColor = "B6A136";
        else if (data[0].type.name == "ghost")
            typeBox1.style.backgroundColor = "735797";
        else if (data[0].type.name == "dragon")
            typeBox1.style.backgroundColor = "6F35FC";
        else if (data[0].type.name == "dark")
            typeBox1.style.backgroundColor = "705746";
        else if (data[0].type.name == "steel")
            typeBox1.style.backgroundColor = "B7B7CE";
        else if (data[0].type.name == "fairy")
            typeBox1.style.backgroundColor = "D685AD";


        const typeBox2 = document.getElementById("type2");
        typeBox2.textContent = data[1].type.name;

        if (data[1].type.name == "normal")
            typeBox2.style.backgroundColor = "A8A77A";
        else if (data[1].type.name == "fire")
            typeBox2.style.backgroundColor = "EE8130";
        else if (data[1].type.name == "water")
            typeBox2.style.backgroundColor = "6390F0";
        else if (data[1].type.name == "electric")
            typeBox2.style.backgroundColor = "F7D02C";
        else if (data[1].type.name == "grass")
            typeBox2.style.backgroundColor = "7AC74C";
        else if (data[1].type.name == "ice")
            typeBox2.style.backgroundColor = "96D9D6";
        else if (data[1].type.name == "fighting")
            typeBox2.style.backgroundColor = "C22E28";
        else if (data[1].type.name == "poison")
            typeBox2.style.backgroundColor = "A33EA1";
        else if (data[1].type.name == "ground")
            typeBox2.style.backgroundColor = "E2BF65";
        else if (data[1].type.name == "flying")
            typeBox2.style.backgroundColor = "A98FF3";
        else if (data[1].type.name == "psychic")
            typeBox2.style.backgroundColor = "F95587";
        else if (data[1].type.name == "bug")
            typeBox2.style.backgroundColor = "A6B91A";
        else if (data[1].type.name == "rock")
            typeBox2.style.backgroundColor = "B6A136";
        else if (data[1].type.name == "ghost")
            typeBox2.style.backgroundColor = "735797";
        else if (data[1].type.name == "dragon")
            typeBox2.style.backgroundColor = "6F35FC";
        else if (data[1].type.name == "dark")
            typeBox2.style.backgroundColor = "705746";
        else if (data[1].type.name == "steel")
            typeBox2.style.backgroundColor = "B7B7CE";
        else if (data[1].type.name == "fairy")
            typeBox2.style.backgroundColor = "D685AD";
    }
    
}
 

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

document.getElementById("info-box").addEventListener("click",  function() {
    getInfoAndMoves(data, "info");
    document.getElementById('info-box').style.backgroundColor = 'green';
    document.getElementById('moves-box').style.backgroundColor = 'grey';
    document.getElementById('right-head').textContent = 'Info';
});

getMoves = (data) => {
    const movesBox = document.getElementById("main-text-box");
    movesBox.innerText = data.reduce((acc, cur)=> acc + cur.move.name + "\n", "");
}
document.getElementById("moves-box").addEventListener("click",  function() {
    getInfoAndMoves(data.moves, "moves");
    document.getElementById('moves-box').style.backgroundColor = 'green';
    document.getElementById('info-box').style.backgroundColor = 'grey';
    document.getElementById('right-head').textContent = 'Moves';
});







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


document.getElementById("left-arrow").addEventListener("click", newFetchReqLeft);
document.getElementById("right-arrow").addEventListener("click", newFetchReqRight);



allFunctions(data);

