import axios from "axios";

async function fetchPlayers(teamParameter) {
  try{
    const switchCase = {
      "Palmeiras": "pal",
      "Corinthians": "cor",
      "Flamengo": "fla"
    }; 
    const teamSigla = switchCase[teamParameter];
    const response = await axios.get(`/public/${teamSigla}-players.json`);
    return response.data;
  }catch(err){
    console.error(`fetchTeams error:`, err.message);
  };
};

export { fetchPlayers };