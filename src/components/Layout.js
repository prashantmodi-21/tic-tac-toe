import React from 'react'

export default function Layout(props) {
  return (
    <div>
        <div className='box' id={`box-${props.data + 1}`} onClick={()=>{return props.go(props.data)}}>{props.value ? props.value : ""}</div>
     </div>
  )
}
