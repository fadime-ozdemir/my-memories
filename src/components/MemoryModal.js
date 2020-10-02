import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function MemoryModal() {

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
          Add new memory
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
              id="name"
              label="name"
              type="text"
              fullWidth
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="date"
              label="Date"
              type="date"
              
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
            />
               <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Enter a description"
              type="text"
              fullWidth
              multiline
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Start
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}