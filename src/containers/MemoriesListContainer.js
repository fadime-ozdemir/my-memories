import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';
import MemoriesList from "../components/memory/MemoriesList";
import { useParams } from "react-router-dom";


export default function MemoriesListContainer() {
  const [memories, setMemories] = useState([{
    id: 'memoryId',
    title: 'Istanbul marmara sea',
    image: "/pathToImage",
    date: '2020/15/25',
    location: 'Istanbul'
  }])

  let { albumId } = useParams();

  // const fetchMemories = async () => {
  //   const res = await db.collection('Memories').get()
  //   const MemoriesData = res.docs.map(memory => ({
  //     id: memory.id,
  //     data: memory.data()
  //   }))
  //   setMemories([...MemoriesData])

  //   // const usersRes = await db.collection('users').get() 
  //   // console.log(usersRes);
  //   // const usersData = usersRes.docs.map(user => user.data())
  //   // console.log(usersData);
  //   // setUsers(usersData)
  // }
  // useEffect(() => { fetchMemories() }, []);
  // //   useEffect( ()=>{fetchMemories()},[memories]);

  return (
    <MemoriesList memories={memories} />
  )
}
