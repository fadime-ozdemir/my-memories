import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';
import AlbumList from "../components/Album/AlbumList";

export default function AlbumListContainer() {
    const [albums, setAlbums] = useState([])
    const fetchAlbums = async () => {
        const res = await db.collection('Albums').get()
        const albumsData = res.docs.map(album => ({
            id: album.id,
            data: album.data()
        }))
        console.log("useffect", albumsData);
        setAlbums([...albumsData])
    }
    useEffect(() => fetchAlbums(), []);


    return (
        <AlbumList albums={albums} />
    )
}

