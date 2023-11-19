import React from 'react'

export default function Info(props) {
  return (
    <div className='intro'>
        <h1>Tic Tac Toe</h1>
        <h3 className="game-status">{props.data}</h3>
      </div>
  )
}
