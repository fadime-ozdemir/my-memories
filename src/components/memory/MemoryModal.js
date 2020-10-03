import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from "../../firebaseConfig";

export default function MemoryModal() {
    //it automatically adds the image path
  const [userInput, setUserInput] = useState({
    title: "",
    albumId: "XwTwpDYuSFzG5CeEhZlk",
    date:"",
    imageId:"",
    location:"",

  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.id]: e.target.value,
    })
  }
  console.log(userInput)
  const handleSubmit = (e) => {
    handleClose();
    addMemory(e);
    setUserInput({
    title: "",
    albumId: "XwTwpDYuSFzG5CeEhZlk",
    date:"",
    imageId:"",
    location:"",
   })
  }
  const addMemory= e => {
    e.preventDefault()
    db.collection('Memories').add(userInput)
    
  }

  // useEffect(()=>{
  //   fetchData()
  // },[email])
  


  
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add new memory to collection test
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add new memory</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add your memory here.
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin="dense"
              id="title"
              label="title"
              type="text"
              fullWidth
              onChange = {e=>handleChange(e)}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange = {e=>handleChange(e)}
            />
             <TextField
              required
              autoFocus
              margin="dense"
              id="image"
              label="Enter a photo"
              type="file"
              accept = "image/*"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange = {e=>handleChange(e)}
            />
               <TextField
              autoFocus
              margin="dense"
              id="location"
              label="Enter a location"
              type="text"
              fullWidth
              multiline
              onChange = {e=>handleChange(e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={e=> handleSubmit(e)} color="primary">
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}