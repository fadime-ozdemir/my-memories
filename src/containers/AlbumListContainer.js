import React, {useState, useEffect} from 'react';
import db from '../firebaseConfig';
import AlbumList from "../components/Album/AlbumList";

export default function AlbumListContainer() {
    const [albums, setAlbums] = useState([])
    const fetchAlbums = async ()=>{
        const res = await db.collection('Albums').get()
        const albumsData = res.docs.map(album => ({
            id: album.id,
            data: album.data()
        }))
        console.log("useffect", albumsData);
        setAlbums([...albumsData])
      
        // const usersRes = await db.collection('users').get() 
        // console.log(usersRes);
        // const usersData = usersRes.docs.map(user => user.data())
        // console.log(usersData);
        // setUsers(usersData)
      }
      useEffect( ()=>{fetchAlbums()},[]);
      // useEffect( ()=>{fetchAlbums()},[albums]);
      console.log("albums", albums)
      
    
    return (
        
            <AlbumList albums={albums} />
        
    )
}

