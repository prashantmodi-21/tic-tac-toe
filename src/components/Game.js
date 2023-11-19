import React from 'react'
import { useState } from 'react';
import Info from './Info';
import Layout from './Layout';

export default function Game() {
  const [button, setButton] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  let status;
  const handleClick = (e)=>{
    const chgValue = (e)=>{
      const squares = button.slice()
      if(handleWinner(squares) || squares[e]){
        return
      }
        squares[e] = player ? "X" : "O"
        setButton(squares)
        setPlayer(!player)
        
    }
    return <Layout go={chgValue} data={e} value={button[e]}/>
  }
  const handleWinner = (value)=>{
    const rows = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
    for(let i = 0; i<rows.length; i++){
      const [a,b,c] = rows[i]
      if(value[a] && value[a] === value[b] && value[a] === value[c]){
        return value[a]
      }
    }
  }
  if(handleWinner(button)){
    status = (!player ? "X" : "O") + " Winner"
  }else if(!button.includes(null)){
    status = "Game Over"
  }
  else{
    status = (player ? "X" : "O") + " Turn"
  }
  return (
    
    <div>
      
      <Info data={status}/>
      
      <div className='box-layout'>
        <div className='row'>
          {handleClick(0)}
          {handleClick(1)}
          {handleClick(2)}
        </div>
        <div className='row'>
          {handleClick(3)}
          {handleClick(4)}
          {handleClick(5)}
        </div>
        <div className='row'>
          {handleClick(6)}
          {handleClick(7)}
          {handleClick(8)}
        </div>
      </div>
    </div>
  )
    
}
