import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Route, Link } from 'react-router-dom';
import MemoryList from "./MemoriesList";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Memory({memory}) {
  const classes = useStyles();
 //when we click the card we should go to the memories list 

 const handleClick = ()=>{
 }

  return (
    <Grid item xs={3}>
        <Card className={classes.root} onClick={handleClick}>
        <CardContent>
            <Typography variant="h5" component="h2">
            {memory.title}<br />
            {memory.date}<br />
            {memory.image}<br />
            {memory.location}

            </Typography>
        </CardContent>
        </Card>
    </Grid>
  );
}