import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';
import AlbumList from "../components/Album/AlbumList";

export default function AlbumListContainer() {
    const [albums, setAlbums] = useState([])
    // const fetchAlbums = async () => {
    //     const res = await db.collection('Albums').get()
    //     const albumsData = res.docs.map(album => ({
    //         id: album.id,
    //         data: album.data()
    //     }))
    //     console.log("useffect", albumsData);
    //     setAlbums([...albumsData])
    // }

    // useEffect(()=>{
    //     db.collection("Albums").onSnapshot(function(res) {
    //         // console.log(album.type),
    //         const albumsData = res.docs.map(album => ({
    //             id: album.id,
    //             data: album.data()
    //         }))
    //         console.log("useffect", albumsData);
    //         setAlbums([...albumsData])
    //     });
    // }, [])
    
    useEffect(()=>{
        db.collection("Albums").onSnapshot(function(snapshot) {
                snapshot.docChanges().forEach(function(change) {
                    if (change.type === "added") {
            
                        setAlbums([...albums, change.doc.data() ])
                        console.log("New city: ", change.doc.data());
                    }
                    // if (change.type === "modified") {
                    //     console.log("Modified city: ", change.doc.data());
                    // }
                    // if (change.type === "removed") {
                    //     console.log("Removed city: ", change.doc.data());
                    // }
                });
            });

    }, [])



    return (
        <AlbumList albums={albums} />
    )
}

