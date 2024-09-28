  import { useEffect, useState } from "react";
  import { ComponentShields } from "./ComponentShields";
  import { fetchTeams } from "../services/fetchShields";
  import '../styles/teamQueueStyles.css'

  const TeamQueue = () => {

    const [ teams, setTeams ] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [ storageTeam, setStorageTeam ] = useState('');
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
      setStorageTeam(teams[index].nameTeam) 
      localStorage.setItem('selectedIndex', selectedIndex);
      localStorage.setItem('teamLocalStorage', teams[index].nameTeam);
    };

    return(
      <section>
        <div id="container">
          <div id="header">
            <h1>escolha um time:</h1>
          </div>

          <div id="shields">
            {teams.map((team, index) => (
                <div key={index} className={`shield ${selectedIndex === index ? 'selected' : ''}`} onClick={() => handleClick(index)}>
                  <ComponentShields
                    srcImageShield={team.srcImageShield}
                    nameTeam={team.nameTeam}
                  />
                </div>
              ))}
          </div>
          </div>
      </section>
    )
  };

  export { TeamQueue };
