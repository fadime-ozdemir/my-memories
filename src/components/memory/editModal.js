import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DropzoneArea } from 'material-ui-dropzone';
import db from "../../firebaseConfig"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'stretch',
        height: '2rem',
        display: 'flex',
        fontSize: '1.2rem',
        justifyContent: 'space-between',
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
    add: {
        alignContent: 'center',
        cursor: 'pointer'
    },

}));




export default function EditModal({ memory, albumId}) {
    const classes = useStyles();

    const [formData, setFormData] = React.useState(memory.data)

    const handleChange = e => {
        const key = e.target.id;
        const value = e.target.value

        setFormData(formData => ({
            ...formData,
            [key]: value
        }));
    }
   

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const updateMemory = ()=>{
        db.collection("Albums").doc(albumId).collection("Memories").doc(memory.id).update(formData)
    }
    const handleClick = () => {
        //when we click edit we send the updated data to server

        updateMemory()

        setOpen(false);
    }

    return (
        <div className={classes.root}>
            {/* <Breadcrumbs aria-label="breadcrumb" separator="|">
                <Link color="inherit" href="/" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Albums
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
                    {albumId}
                </Typography>

            </Breadcrumbs>

            <Typography color="textPrimary" className={classes.add} onClick={handleClickOpen}>
                <AddIcon className={classes.icon} />
                   Edit 
            </Typography> */}

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Memory</DialogTitle>
                <DialogContent>
                    <TextField 
                        multiline
                        autoFocus 
                        fullWidth 
                        id="words"
                        name="words"
                        label="Some Words" 
                        type="text" 
                        value={formData.words}
                        onChange={handleChange} />
                    <TextField
                        label="Location"
                        id="location"
                        name="location"
                        defaultValue=""
                        className={classes.textField}
                        helperText="The place of this memory"
                        margin="dense"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <TextField
                        label=" "
                        type="date"
                        id="date"
                        name="date"
                        defaultValue=""
                        className={classes.textField}
                        helperText="The date of this memory"
                        margin="dense"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <DropzoneArea
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        filesLimit={1}
                        value={formData.imageFile}
                        onChange={(files) => setFormData(formData => ({...formData, imageFile: files[0]}))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleClick} color="primary">
                        Edit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}