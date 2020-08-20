import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Leaders () {

    const [winnerList, setWinnerList] = useState([])


    useEffect(()=>{
      axios.get('/api/v1/records')
      .then(res=>{
       setWinnerList(res.data)
      })
    },[winnerList])

   return (<>
       <h3>Winner List:</h3>
       <ul>{
       winnerList.map(x=>{
       return <li>Name: {x.name} , date: {x.date}</li>
       })}</ul></>)
  }

