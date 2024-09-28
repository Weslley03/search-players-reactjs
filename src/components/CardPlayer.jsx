import { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/fetchPlayers';
import '../styles/cardPlayer.css'

const CardPlayer = () => {

  const [ player, setPlayer ] = useState({});
  const [inputData, setInputData] = useState(localStorage.getItem('searchTerm') || '');
  const [ team, setTeam ] = useState(localStorage.getItem('teamLocalStorage'));

  useEffect(() => {
    const getPlayer = async () => {
      if (inputData) {
        try{
          setTeam(localStorage.getItem('teamLocalStorage'));      
          const playerList = await fetchPlayers(team);
          const playersArray = playerList.players;
          
          const selectPlayer = playersArray.find(
            (player) => player.name.toLowerCase() === inputData.toLowerCase());
          
          if(selectPlayer){
            setPlayer(selectPlayer);
          }else {
            setPlayer({});
            console.log("jogador não encontrado");
          }
        }catch(err){
          console.error("erro ao buscar o jogador:", err);
        };
      }else {
        setPlayer({});
      };
    };
    getPlayer();
  }, [inputData, team]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
    localStorage.setItem('searchTerm', value);
  };

  return(
    <>
    <div id='inputContainer'>
      {
        <input 
          id="inputSearch" 
          placeholder={`qual o jogador?`}
          value={inputData}
          onChange={handleInputChange}
        />
      }  
    </div>

    <section id="containerCardPlayer">
        <div id="agrupamento">
        <div id="imagem">
          {player && player.imagePlayer ? (
            <img id="photoPlayer" src= {`${player.imagePlayer}`} />
          ) :  ( 
            <p> carregando... </p>
          )}
        </div>

        <div id="dadosPlayer">
          <p> nome: {player.name} </p>
          <p> idade: {player.age} </p>
          <p> position: {player.position} </p>
          <p> partidas: {player.matches} </p>
          <p> gols: {player.goals} </p>
          <p> assists: {player.assists} </p>
        </div>
      </div>
    </section>
    </>
  );  
};

export { CardPlayer };