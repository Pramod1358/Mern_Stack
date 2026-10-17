
const arr = [
    {id : 1 , name:"Pramod", score : 183},
    {id : 2 , name : "Jyoshendra" , score : 192},
    {id : 3 , name : "Saatvik" , score : 112},
    {id : 1 , name:"Pramod", score : 183},
    {id : 2 , name : "Jyoshendra" , score : 192},
    {id : 3 , name : "Saatvik" , score : 112}

]



const container = document.getElementById("container");

arr.forEach(player => {

    container.innerHTML += `
        <div>
            <h3>${player.name}</h3>
            <p>ID: ${player.id}</p>
            <p>Score: ${player.score}</p>
        </div>
    `;

});
