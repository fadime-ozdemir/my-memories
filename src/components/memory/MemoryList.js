import React from 'react';
import Memory from "./Memory";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
export default function MemoryList({memories}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        {memories? (
        <Grid container spacing={3}>
            {memories.map(memory => <Memory memory={memory} />)}
        </Grid>
        ) : null}
    </div>
    )
}

