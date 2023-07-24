import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import StartBoard from './components/StartBoard';
import MainBoard from './components/MainBoard';
import './index.css';
import archer from './svg/archer.svg';
import horn from './svg/horn.svg';
import shield from './svg/shield';
import spearMan from './svg/spear-man.svg';
import swardHorseMan from './svg/sward-horse-man.svg';
import swords from './svg/swords';


function R22App () {

    const[board, setBoard] = useState(true)

    const boardChange = () => {
        setBoard(false)
        console.log(board)
    }

    return (
        <div>
       
            {board ? 
            <StartBoard boardChange={boardChange}/> :
            <MainBoard />}
       </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<R22App />)