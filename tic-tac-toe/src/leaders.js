import React  from 'react'

export default function Leaders (props) {


   return (<>
       <h3>Winner List:</h3>
       <ul>{
       props.winnerList.map(x=>{
       return <li>Name: {x.name} , date: {x.date} , game duration: {x.time}</li>
       })}</ul></>)
  }

