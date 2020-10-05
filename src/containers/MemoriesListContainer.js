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

  const [albumDetail, setAlbumDetail] = useState('');

  let { albumId } = useParams();

  const fetchAlbumDetail = async () => {
    const res = await db.collection('Albums').doc(albumId).get()
    setAlbumDetail(res.data());
  }

  useEffect(() => { fetchAlbumDetail() }, []);

  return (
    <MemoriesList memories={memories} albumName={albumDetail.name} />
  )
}
