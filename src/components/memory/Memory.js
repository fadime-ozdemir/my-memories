import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import db, {storage} from "../../firebaseConfig";
import * as admin from 'firebase-admin';

admin.initializeApp();

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  settings: {
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  caption: {
    marginRight: '8px',
  },
  
}));


export default function Memory({ memory, albumId, setMemories, getDeletedItemId }) {
  const classes = useStyles();
  console.log("memory", memory)

  const [isClick, setClick]= React.useState(false)
  const [toggle, setToggle]=React.useState(null)

  
 
const deletePhoto = (memoryImg)=>{
  const bucket = admin.storage().bucket("images");

  // const bucket = storage.bucket();

  return bucket.deleteFiles({
    prefix: `images/${memoryImg}`}
  );
}
  //delete memory from database
  const deleteMemory = ()=>{
    db.collection("Albums").doc(albumId).collection("Memories").doc(memory.id).delete().then(function() {
                deletePhoto(memory.data.imageFile)
                getDeletedItemId()
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            })
            return setToggle(setClick(!isClick))

  }
 //update memory to the database
  const editMemory = ()=>{
    return(
      db.collection("Albums").doc(albumId).collection("Memories").doc(memory.id).update({foo: "bar"})
    )
  }

  const renderOptions = ()=>{
    return <div>
      <Button onClick={deleteMemory}>Delete</Button>
      <Button onClick={editMemory}>Edit</Button>
    </div>
  }
 

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={memory.data.imageFile? memory.data.imageFile : 'https://images.theconversation.com/files/250919/original/file-20181217-185258-1gc7soo.jpg'}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {memory.data.words}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography className={classes.caption} variant="caption" color="textSecondary" component="p">
            {memory.data.location}
          </Typography>
          <Typography className={classes.caption} variant="caption" color="textSecondary" component="p">
            {memory.data.date}
          </Typography>

          

          <IconButton
            className={classes.settings}
            aria-label="settings"
          >
            <MoreVertIcon onClick={()=>setToggle(setClick(!isClick))}/>
          </IconButton>
        </CardActions>
        {isClick && renderOptions()}
      </Card>
    </Grid>
  );
}
