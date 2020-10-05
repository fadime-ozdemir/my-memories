import React from 'react';
import Memory from "./Memory";
import Subnav from './Subnav'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));


export default function MemoryList({ memories, albumName }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Subnav albumName={albumName} />
      {memories ? (
        <Grid container spacing={3}>
          {memories.map(memory => <Memory memory={memory} />)}
        </Grid>
      ) : null}
    </div>
  )
}
