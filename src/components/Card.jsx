import React from 'react'

export default function Card( { horn, shield, swords, heroImg, heroName}) {
  return (
    
        <div className='cardWrapper'>
            <div className="upperWrapper">
                <div className="upperLeft">
                    <img src={shield} alt="shield" 
                    style={{scale:"0.3",
                            color:"white"}} />
                    <span className='counter'>00</span>
                </div>
                <div className="upperRight">
                    <img src={swords} alt="swords" 
                    style={{scale:"0.3",
                            color:"white"}} />
                    <span className='counter'>00</span>
                </div>            
            </div>
            <div className="middleWrapper">
            <img src={`${heroImg}`} alt="hero"  style={{
                scale:"0.1"
            }}/>
            <p className="heroName">{heroName}</p>
            </div>
            <div className="downerWrapper">

            </div>
        </div>
    
  )
}
