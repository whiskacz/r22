import React, { useState } from 'react';
import ReactDom from 'react-dom/client';
import StartBoard from './components/StartBoard';
import Card from './components/Card';
import './index.css';
import archer from './svg/archer.svg';
import horn from './svg/horn.svg';
import shield from './svg/shield.svg';
import spearMan from './svg/spear-man.svg';
import swardHorseMan from './svg/sward-horse-man.svg';
import swords from './svg/swords.svg';


function R22App () {

    const[board, setBoard] = useState(true)

    const boardChange = () => {
        setBoard(false)
        console.log(board)
    }

    return (
        <div>
       
            {/* {board ? 
            <StartBoard boardChange={boardChange}/> : */}
            <Card
            archer={archer}
            horn={horn}
            shield={shield}
            heroImg={spearMan}
            heroName={"Spearman"}
            swords={swords}
            />
       </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<R22App />)