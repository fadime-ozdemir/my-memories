import React from 'react';
import db from "../../firebaseConfig";
import Memory from "./Memory";
import Subnav from './Subnav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

export default function MemoryList({ memories, albumName, albumId }) {

  const classes = useStyles();

  const submitData = (formData) => {
    db.collection('Albums').doc(albumId).collection("Memories").add(formData)

  }
 console.log("list-memory", memories)
  return (
  
    <div className={classes.root}>
      <Subnav albumName={albumName} submitData={submitData} />
      {memories && memories.length > 0 ? (
        <Grid container spacing={3}>
          {memories.map(memory => <Memory memory={memory} key={memory.id} />)}
        </Grid>
      ) : null}
    </div>
  )
}
