import React from 'react';
import db, { storage } from "../../firebaseConfig";
import Memory from "./Memory";
import Subnav from './Subnav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function MemoryList({ memories, albumName, albumId, setMemories}) {

  const classes = useStyles();

  const submitData = (formData) => {
    uploadImage(formData)

  }
  const uploadImage = (formData) => {
    const image = formData.imageFile;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("progress", progress);
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          db.collection('Albums').doc(albumId).collection("Memories").add({ ...formData, imageFile: url, imageName: image.name })
          console.log('url', url);
        })
      });
  }

  return (

    <div className={classes.root}>
      <Subnav albumName={albumName} submitData={submitData} />
      {memories && memories.length > 0 ? (
        <Grid container spacing={3}>
          {memories.map(memory => <Memory memory={memory} key={memory.id} albumId={albumId} setMemories={setMemories} />)}
        </Grid>
        // <EditModal />
      ) : null}
    </div>
  )
}
