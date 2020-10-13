import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';
import MemoriesList from "../components/memory/MemoriesList";
import { useParams } from "react-router-dom";


export default function MemoriesListContainer() {
  const [memories, setMemories] = useState([])

  const [albumDetail, setAlbumDetail] = useState('');

  const [deletedItemId, setDeletedItemId] = useState("");

  const fetchAlbumDetail = async () => {
    const res = await db.collection('Albums').doc(albumId).get()
    setAlbumDetail(res.data());
  }
  useEffect(() => { fetchAlbumDetail() }, []);

  let { albumId } = useParams();

  // console.log("album", albumDetail)

  useEffect(() => {
    db.collection("Albums").doc(albumId).collection("Memories").onSnapshot(function (snapshot) {
      let memoriesList = memories;
      snapshot.docChanges().forEach(function (change) {
        // console.log(change.);
        if (change.type === "added") {
          const memory = {
            id: change.doc.id,
            data: change.doc.data()
          }
          memoriesList.push(memory)
        }
        // if (change.type === "modified") {
        //     console.log("Modified city: ", change.doc.data());
        // }
        if (change.type === "removed") {
          const removedId = change.doc.id;
          memoriesList = memoriesList.filter(memory => memory.id !== removedId);
        }

        setMemories([...memoriesList])
      });
    });

  }, [])

  return (
    <MemoriesList memories={memories} albumName={albumDetail ? albumDetail.name : null} albumId={albumId} setMemories={setMemories} />
  )
}
