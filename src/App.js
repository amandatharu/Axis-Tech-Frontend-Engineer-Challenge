import './App.css';
import './components/Loadbutton/Loadbutton.css'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Heading from './components/Heading01/Heading';
import Cards from './components/Cards/Cards';
import { CardItems } from './components/Cards/Cardvalues';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext= createContext(null);

function App() {
  //State hook to toggle between light & dark mode
  const[theme, setTheme] = useState("light")

  //State hook to loop & view Array Values
  const [projects, setProjects]=useState([]);

  //State hook to Control Number of Displayed Cards in Website
  const [visible, setVisible] = useState(1);

  //function to toggle between light & dark mode
  const toggleTheme=()=>{
    setTheme((curr)=>(curr === "light" ? "dark":"light"))
  }

  //Function to Load More via More Projects Button
  const showMoreItems=()=>{
    setVisible(prevValue=>prevValue + 6);
  }

  //Use of API to Arrange Cards in Order
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((data)=>setProjects(data));
  }, []);


  return (
    // Applying toggle theme
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>

        {/* Displaying of Navbar */}
        <Navbar />

        {/* Toggle Switch to change Theme */}
        <label className='toggle-switch'>
          <div className='toggle-image'/> 
          <input type="checkbox" onChange={toggleTheme} checked={theme==="dark"}/>
          <span className='slider round'></span>
        </label>

        {/* Displaying of Banner */}
        <Banner />

        {/* Displaying of Project Heading */}
        <Heading />

        {/* Displaying of Cards */}
        <div className='App-row'>
          {projects.slice(0, visible).map(projects=>(
            <Cards details={CardItems} />
          ))}
        </div>

        {/* Displaying of More Prjects Button */}
        <div className='LoadMore'>
          <button className='load-button' onClick={showMoreItems}>More projects</button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

