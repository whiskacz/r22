import React from 'react'

export default function StartBoard({ boardChange }) {
  return (
    <div className="startBoardWrapper">
        <span>Game Cube</span>
        <button onClick={boardChange}>Start Game</button>
        <span>Game Rules</span>
        <ul style={{
            width:'70vw'
        }}>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, maxime culpa. Fugiat, pariatur quis eveniet praesentium odio nihil vitae quod necessitatibus, possimus quam sapiente nisi reiciendis tempore eum! Pariatur, recusandae!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, maxime culpa. Fugiat, pariatur quis eveniet praesentium odio nihil vitae quod necessitatibus, possimus quam sapiente nisi reiciendis tempore eum! Pariatur, recusandae!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, maxime culpa. Fugiat, pariatur quis eveniet praesentium odio nihil vitae quod necessitatibus, possimus quam sapiente nisi reiciendis tempore eum! Pariatur, recusandae!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, maxime culpa. Fugiat, pariatur quis eveniet praesentium odio nihil vitae quod necessitatibus, possimus quam sapiente nisi reiciendis tempore eum! Pariatur, recusandae!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, maxime culpa. Fugiat, pariatur quis eveniet praesentium odio nihil vitae quod necessitatibus, possimus quam sapiente nisi reiciendis tempore eum! Pariatur, recusandae!</li>
        </ul>
    </div>
  )
}
