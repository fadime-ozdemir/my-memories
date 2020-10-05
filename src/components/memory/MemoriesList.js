import React from 'react';
import Memory from "./Memory";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },

}));


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function MemoryList({ memories }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
          <HomeIcon className={classes.icon} />
        Material-UI
      </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
          className={classes.link}
        >
          <WhatshotIcon className={classes.icon} />
        Core
      </Link>
        <Typography color="textPrimary" className={classes.link}>
          <GrainIcon className={classes.icon} />
        Breadcrumb
      </Typography>
      </Breadcrumbs>

      {memories ? (
        <Grid container spacing={3}>
          {memories.map(memory => <Memory memory={memory} />)}
        </Grid>
      ) : null}
    </div>
  )
}
