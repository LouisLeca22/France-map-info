import React, {useContext, useEffect, useRef} from 'react'
import { GlobalContext } from '../context/GlobalState';
import './modal.css'


export const Modal = ({info}) => {
    const {setOpen, open} = useContext(GlobalContext)

    let modalRef = useRef()

    useEffect(() => {
        const checkIfClickOutside = (e) => {
          if(open &&modalRef.current && !modalRef.current.contains(e.target)){
            setOpen(!open)
          }
        }
        document.addEventListener("click", checkIfClickOutside)
      return () => {
        document.removeEventListener("click", checkIfClickOutside)
      }
    }, [open])

    useEffect(() => {
        const checkIfEscape = (e) => {
            if(e.keyCode === 27){
                setOpen(false)
            }
        }
        window.addEventListener("keydown", checkIfEscape)
        return () => {
        window.removeEventListener("keydown", checkIfEscape)
        }
    }, [open])


    return (
        <div className="modalBackground">
            <div className="modalContainer" ref={modalRef}>
                <div className="close">
                    <button onClick={(e) => setOpen(false)}>X</button>
                </div>
                <div className="title">
                    <h1>{info.title}</h1>
                </div>
                <div className="desc">
                    <p>{info.desc}</p>
                </div>
                <div className="id">
                   {info.id}
                </div>
            </div>
        </div>
    )
}


