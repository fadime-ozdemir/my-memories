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
  const [memoriesLocal, setMemoriesLocal] = React.useState([])
  const classes = useStyles();

  const submitData = (formData) => {
    setMemoriesLocal(preValues => [...preValues, formData])
  }

  return (
    <div className={classes.root}>
      <Subnav albumName={albumName} submitData={submitData} />
      {memories ? (
        <Grid container spacing={3}>
          {memoriesLocal.map(memory => <Memory memory={memory} />)}
        </Grid>
      ) : null}
    </div>
  )
}
