function gameObject()
{
    const homeTeam = {
        teamName:"Brooklyn Nets",
        colors:["Black", "White"],
        players:{
            "Alan Anderson":
            {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans":
            {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,

            },
            "Brook Lopez":
            {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,

            },
            
        },
    };


    const awayTeam = {
        teamName:"Charlotte Hornets",
        colors:["Turquoise", "Purple"],
        players:{
            "Jeff Adrien":
            {
                number: 14,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 3,
            },
            "Bismak Biyombo":
            {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,

            },
            "DeSagna Diop":
            {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,

            },
            
        },
    };
    const gameObject = {
        home: homeTeam,
        away: awayTeam,
    };

    return gameObject;

}
console.log(gameObject());
function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())
  function numPointsScored(playerName)
  {
     let object = gameObject();
     let points=0;
     for(let x in object.home.players)
     {
        if (x===playerName)
        {
            debugger;
            points=object.home.players[playerName].points;
            break;
        }
     }
     for(let x in object.away.players)
     {
        if (x===playerName)
        {
            points=object.away.players[playerName].points;
            break;
        }
     }
     return points;

  }

  function shoeSize(playerName)
  {
     let object = gameObject();
     let shoeSize=0;
     for(let x in object.home.players)
     {
        if (x===playerName)
        {
            debugger;
            shoeSize=object.home.players[playerName].shoe;
            break;
        }
     }
     for(let x in object.away.players)
     {
        if (x===playerName)
        {
            shoeSize=object.away.players[playerName].shoe;
            break;
        }
     }
     return shoeSize;

  }
  function teamColors(teamName)
  {
    let object = gameObject();
    let teamColors=[];
   
        if (object.home.teamName===teamName)
        {
            console.log(object.home.colors,"object");
            teamColors.push(object.home.colors);
        }
       else if (object.away.teamName===teamName)
        {
            teamColors.push(object.away.colors);
        }
  
    
     return teamColors;

  }
  function teamNames()
  {
    let object = gameObject();
    const teamNames = [];

    teamNames.push(object.home.teamName);

    teamNames.push(object.away.teamName);

    return teamNames;
  }
  function playerNumbers(teamName)
  {
    let object = gameObject();
    const teamNumbers = [];
    if (object.home.teamName===teamName){
    for (let player in object.home.players)
    {
        teamNumbers.push(object.home.players[player].number);
    }
}
else if (object.away.teamName===teamName)
{
    for (let player in object.away.players)
    {
        teamNumbers.push(object.away.players[player].number);
    }
}
return teamNumbers;
  }
  function playerStats(playersName)
  {
    let object = gameObject();
    let playerStats={};
    for (const player in object.home.players)
    {
        if (player===playersName)
        {
         playerStats=object.home.players[player];
            break;

        }
    }
    if (playerStats === null) {
        for (const playerName in object.away.players) {
          if (player === playerName) {
            playerStats = object.away.players[player];
            break;
          }
        }
      }
    return playerStats;
  }
  function bigShoeRebounds()
  {
    let object = gameObject();
    let maxShoeSize = 0;
    let rebounds = null;

    for (const playerName in object.home.players)
    {
    const playerShoeSize = object.home.players[playerName].shoe;
    if (playerShoeSize > maxShoeSize) {
      maxShoeSize = playerShoeSize;
      rebounds =  object.home.players[playerName].rebounds;
    }

    }
    for (const playerName in object.away.players)
    {
        const playerShoeSize = object.away.players[playerName].shoe;
    if (playerShoeSize > maxShoeSize) {
      maxShoeSize = playerShoeSize;
      rebounds =  object.away.players[playerName].rebounds;
    }
    }
   


  return rebounds;
  }
  console.log(numPointsScored("DeSagna Diop"),"points");
  console.log(shoeSize("DeSagna Diop"),"shoSize");
  console.log(teamColors("Brooklyn Nets"),"teamColors");
  console.log(teamNames());
  console.log(playerNumbers("Brooklyn Nets"));
  console.log(playerStats("Reggie Evans"));
  console.log(bigShoeRebounds());