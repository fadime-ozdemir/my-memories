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
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DropzoneArea } from 'material-ui-dropzone';



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


export default function Subnav({ albumName }) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb" separator="|">
                <Link color="inherit" href="/" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Albums
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
                    {albumName}
                </Typography>

            </Breadcrumbs>

            <Typography color="textPrimary" className={classes.add} onClick={handleClickOpen}>
                <AddIcon className={classes.icon} />
                    Add Memory
            </Typography>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Memory</DialogTitle>
                <DialogContent>
                    <TextField autoFocus fullWidth id="standard-search" label="Title" type="text" />
                    <TextField
                        label="Location"
                        id="margin-dense"
                        defaultValue=""
                        className={classes.textField}
                        helperText="The place of this memory"
                        margin="dense"
                    />
                    <TextField
                        label=" "
                        type="datetime-local"
                        id="margin-dense"
                        defaultValue=""
                        className={classes.textField}
                        helperText="The date of this memory"
                        margin="dense"
                    />
                    <DropzoneArea
                        acceptedFiles={['image/*']}
                        dropzoneText={"Drag and drop an image here or click"}
                        filesLimit={1}
                        onChange={(files) => console.log('Files:', files)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={handleClose} color="primary">
                        Add
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}