import axios from "axios";

async function fetchTeams() {
  try{
    const response = await axios.get('/public/teams.json');
    return response.data;
  }catch(err){
    console.error(`fetchTeams error:`, err.message);
  };
};

export { fetchTeams };