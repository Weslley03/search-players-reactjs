import { useEffect, useState } from "react";
import { ComponentShields } from "./ComponentShields";
import { fetchTeams } from "../services/fetchShields";
import '../styles/teamQueueStyles.css'

const TeamQueue = () => {

  const [ teams, setTeams ] = useState([]);
  const [ fodase, setFodase ] = useState('');
   
  const [selectedIndex, setSelectedIndex] = useState('');

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetchTeams();
      const teamArray = Object.values(data);
      setTeams(teamArray.slice(0, 3));
    };
    getTeams();
  }, []);

  const handleClick = (index) => {
    setSelectedIndex(index);
    setFodase(teams[index].nameTeam) 
    localStorage.setItem('selectedIndex', selectedIndex);
    localStorage.setItem('teamLocalStorage', teams[index].nameTeam);
    console.log(`Time selecionado no índice: ${index}`);
    alert(`Você selecionou o time: ${teams[index].nameTeam}`);
  };

  return(
    <section>
      <div id="container">
        <div id="header">
          <h1>escolha um time:</h1>
        </div>

        <div id="shields">
          {teams.map((team, index) => (
              <div key={index} onClick={() => handleClick(index)}>
                <ComponentShields
                  srcImageShield={team.srcImageShield}
                  nameTeam={team.nameTeam}
                />
              </div>
            ))}
        </div>

        <input id="inputSearch" placeholder={`procurar em ${fodase}`}/>
      </div>
    </section>
  )
};

export { TeamQueue };
