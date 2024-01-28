import { leagueID } from './leagueInfo.js';


setPlayerData();

function setPlayerData () {

    if(!localStorage.getItem("PlayerData"))
    {
        getPlayers();
    }
}


async function getPlayers() {

    var myPlayerMap = { 
        player : []
    };
    let counter = 0;
    const res  = await fetch(`https://api.sleeper.app/v1/players/nfl`); 
    const data = await res.json();
    const players = Object.keys(data);

    for(let i=1; i<players.length; i++)
    {
        if(data[i])
        {
            let playerObj = {};
            counter++;
            if(counter < 11)
            {
                console.log(data[i]);
                playerObj["player_id"] = i;
                playerObj["position"] = data[i].position;
                playerObj["firstname"] = data[i].first_name;
                playerObj["lastname"] = data[i].last_name;
            }
            myPlayerMap.player.push(playerObj);
        }
    }

localStorage.setItem("PlayerData", JSON.stringify(myPlayerMap));

}