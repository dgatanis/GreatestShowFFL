export const leagueName = "Crush Cities "; // your league name
export const dues = 200; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

const firstYear = 2024;

export default async function currentLeagueId() {
    const thisYear = new Date().getFullYear;
    const myUserId = '467550885086490624';
    const userLeagues = await fetch(`https://api.sleeper.app/v1/user/${myUserId}/leagues/nfl/${thisYear}`);
    const leagueData = await userLeagues.json();
    const leagues = leagueData.map((league) => league);

    for(let league of leagues)
    {
        if(leagueData.find(x => x.name === leagueName))
        {
            return league.league_id;
        }
    } 
}