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
    // fetchAlbums()
    // }, [])

    useEffect(() => {
        db.collection("Albums").onSnapshot(function (snapshot) {
            
            snapshot.docChanges().forEach(function (change) {
                // console.log(change.);
                if (change.type === "added") {
                    const album = {
                        id: change.doc.id,
                        data: change.doc.data()
                    }

                    setAlbums((prevAlbums) => [...prevAlbums, album]);
                }
                if (change.type === "modified") {
                    const modifiedAlbum = {
                        id: change.doc.id,
                        data: change.doc.data(),
                      };
                      setAlbums((prevAlbums) => {
                        let newAlbums = [...prevAlbums];
                        const moditiedAlbumIndex = newAlbums.findIndex(
                          (album) => album.id === change.doc.id
                        );
                        newAlbums.splice(moditiedAlbumIndex, 1, modifiedAlbum);
                        return newAlbums;
                      });
                }
                if (change.type === "removed") {
                    const removedId = change.doc.id;
                    setAlbums((prevState) => {
                        let newAlbums = [...prevState];
                        newAlbums = newAlbums.filter(
                          (memory) => memory.id !== removedId
                        );
                        return newAlbums;
                      });
                      console.log("Album is removed !");
                }
               
            });

        });

    }, [])



    return (
        <AlbumList albums={albums} />
    )
}

