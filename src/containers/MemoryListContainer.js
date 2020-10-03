import React, {useState, useEffect} from 'react';
import db from '../firebaseConfig';
import MemoryList from "../components/memory/MemoryList";

export default function MemoryListContainer() {
    const [memories, setMemories] = useState([])
    const fetchMemories = async ()=>{
        const res = await db.collection('Memories').get()
        const MemoriesData = res.docs.map(memory => ({
            id: memory.id,
            data: memory.data()
        }))
        console.log("useffect", MemoriesData);
        setMemories([...MemoriesData])
      
        // const usersRes = await db.collection('users').get() 
        // console.log(usersRes);
        // const usersData = usersRes.docs.map(user => user.data())
        // console.log(usersData);
        // setUsers(usersData)
      }
      useEffect( ()=>{fetchMemories()},[]);
    //   useEffect( ()=>{fetchMemories()},[memories]);
      console.log("Memories", memories)
      
    
    return (
        
            <MemoryList memories={memories} />
        
    )
}
