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

    useEffect(() => {
        db.collection("Albums").onSnapshot(function (snapshot) {
            let albumsList = albums;
            snapshot.docChanges().forEach(function (change) {
                // console.log(change.);
                if (change.type === "added") {
                    const album = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }
                    
                    albumsList.push(album);
                }


                // if (change.type === "modified") {
                //     console.log("Modified city: ", change.doc.data());
                // }
                // if (change.type === "removed") {
                //     console.log("Removed city: ", change.doc.data());
                // }
            });
            console.log(albumsList);
            setAlbums([...albumsList])
        });

    }, [])



    return (
        <AlbumList albums={albums} />
    )
}

