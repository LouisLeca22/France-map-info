import React, {useContext} from 'react'
import "./list.css"
import { GlobalContext } from '../context/GlobalState'

export const List = () => {

    const {pointed, setOpen, setLocation, setPointed} = useContext(GlobalContext)

    const mouseClick = (e) => {
        setLocation(e.target.id)
        setOpen(true)
    }

    const mouseEnter = (e) => {
       setPointed(e.target.id)
    }

    const mouseLeave = (e) => {
      setPointed("")
    }


    return (
        <div className="list">
            <ul>
                <li id="FR-GES" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}   className={pointed === "FR-GES" ? "active" : ""} >Grand-Est</li>
                <li id="FR-NAQ" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}   className={pointed === "FR-NAQ" ? "active" : ""} >Nouvelle-Aquitaine</li>
                <li id="FR-ARA" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}   className={pointed === "FR-ARA" ? "active" : ""} >Auvergne-Rhônes-Alpes</li>
                <li id="FR-BFC" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-BFC" ? "active" : ""} >Bourgogne-Franche-Comté</li>
                <li id="FR-BRE" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}   className={pointed === "FR-BRE" ? "active" : ""} >Bretagne</li>
                <li id="FR-CVL" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-CVL" ? "active" : ""} >Centre-Val de Loire</li>
                <li id="FR-COR" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-COR" ? "active" : ""} >Corse</li>
                <li id="FR-IDF" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-IDF" ? "active" : ""} >Île-de-France</li>
                <li id="FR-OCC" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-OCC" ? "active" : ""} >Occitanie</li>
                <li id="FR-HDF" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}   className={pointed === "FR-HDF" ? "active" : ""} >Haut-de-France</li>
                <li id="FR-NOR" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-NOR" ? "active" : ""} >Normandie</li>
                <li id="FR-PDL" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}  className={pointed === "FR-PDL" ? "active" : ""} >Pays-de-Loire</li>
                <li id="FR-PAC" onClick={(e) => mouseClick(e)} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}   className={pointed === "FR-PAC" ? "active" : ""} >Provence-Alpes Côte d'Azur</li>
            </ul>
        </div>
    )
}
