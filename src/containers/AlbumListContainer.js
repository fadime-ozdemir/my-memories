import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';
import AlbumList from "../components/Album/AlbumList";

export default function AlbumListContainer() {
    const [albums, setAlbums] = useState([])
    
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
                        console.log(change.doc.data())
                        //remove the subcollection of that album 
                        // db.collection("Albums").doc(removedId).collection("Memories").delete().then(function () {
                        //     storage.ref(`images/${memory.data.imageName}`).delete().then(function () {
                        //         console.log('image deleted successfully');
                        //     }).catch(function (error) {
                        //         console.log('Uh-oh, an error occurred while deleting the image', error);
                        //     });
                        //     console.log("Document successfully deleted!");
                        // }).catch(function (error) {
                        //     console.error("Error removing document: ", error);
                        // })

                        //display the other albums
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

