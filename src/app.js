const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';

    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map((name,i) =>{
        let type = " "
        if(i%2==0){type = "hero";}
        else{type = "villain"} 

        return{
            name: name,
            strength: getRandomStrength(),
            image: `images/super-${i+1}.png`,
            type: type,
        }
    })
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    const HV = players.filter((item)=> item.type === type)

    console.log(players)
    console.log(HV)
    const output = HV.map((item)=>{
        return `<div class="player"><img src="${item.image}" alt=" ">
                <div class="name">${item.name}</div>
                <div class="strength">${item.strength}</div>
                </div>`
    })
    console.log(output)

    fragment = output.join("");
    console.log(fragment)
    
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}