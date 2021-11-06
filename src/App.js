
import './App.css';
import {Map} from "./components/Map"
import {List} from "./components/List"
import {Modal} from "./components/Modal"
import {Header} from "./components/Header"
import {useState, useEffect, useContext} from "react"
import { GlobalContext } from './context/GlobalState';
import data from "./data"


function App() {


  const {location, open} = useContext(GlobalContext)
  const [info, setInfo] = useState({id: "hey", title: "hey", desc:"hey"})


  useEffect(() => {
      const getData =  () => {
      
       const object =  data.filter(item => item.id === location)[0]
        setInfo(object)
      
      }

      getData()
  }, [location, info])




  return (
    <>
      <Header />
      <div className="row">
        <Map />
        <List />
      </div>
      {info && open && <Modal info={info}/>}
      
    </>
  );
}

export default App;
