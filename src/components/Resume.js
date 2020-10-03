import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    closeIcon: {
        background: 'black',
        color: 'white',
        margin: '10px',
        outline: 'none !important',
        '&:hover': {
            background: 'black'
        }
    },
    headerTxt: {
        display: 'flex',
        justifyContent: 'Center',
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '2px'
    },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Resume(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        props.isClose();
    };

    React.useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen])

    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <Box display="flex" justifyContent="flex-end">
                    <IconButton edge="start" size="small" className={classes.closeIcon} onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <div className={classes.headerTxt}>RESUME</div>
            </Dialog>
        </div>
    )
}
