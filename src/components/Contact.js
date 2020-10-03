import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 400,

        [theme.breakpoints.down('sm')]: {
            width: 300
        },
    },
    headerTxt: {
        marginTop: '2rem',
        marginBottom: '0',
        marginLeft: '1rem',
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    subTxt: {
        marginTop: '-11px',
        marginLeft: '15px',
        fontSize: '13px',
        fontWeight: 'bold'
    },
    callIconContainer: {
        paddingLeft: '10px',
        marginTop: '20px'
    },
    mailIconContainer: {
        paddingLeft: '10px',
    },
    icons: {
        marginRight: '8px'
    },
    textFeildContainer: {
        marginTop: '3rem',
        paddingLeft: '10px'
    },
    txtAreaContainer: {
        marginTop: '1rem',
        paddingLeft: '10px'
    },
    txtField: {
        width: '330px',
        [theme.breakpoints.down('sm')]: {
            width: '240px'
        }
    },
    sendBtn: {
        marginTop: '3rem',
        marginLeft: '121px',
        padding: '10px 45px',
        backgroundColor: 'dimgrey',
        color: 'white',
        borderRadius: '70px',
        outline: 'none !important',
        '&:hover': {
            background: "dimgrey",
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '213px'
        }
    }
}));

export default function Contact(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        // setOpen(false);
        props.isClose();
    };

    React.useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen])

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                    <Drawer anchor={anchor} open={open} onClose={handleClose}>
                        <List className={classes.list}>
                            <p className={classes.headerTxt}>LET'S TALK!</p>
                            <div className={classes.subTxt}>CALL ME OR SEND ME A REQUEST</div>
                            <div className={classes.callIconContainer}><CallIcon color="action" fontSize="small" className={classes.icons} />(200) 100 3000</div>
                            <div className={classes.mailIconContainer}><MailIcon color="action" fontSize="small" className={classes.icons} />designer@ui43.com</div>

                            <div className={classes.textFeildContainer}>
                                <TextField id="outlined-basic" label="Address e-mail" variant="outlined" className={classes.txtField} />
                            </div>

                            <div className={classes.txtAreaContainer}>
                                <TextField className={classes.txtField}
                                    id="outlined-multiline-static"
                                    label="Request"
                                    multiline
                                    rows={8}
                                    defaultValue="Type your request"
                                    variant="outlined"
                                />
                            </div>
                            <Button className={classes.sendBtn} variant="contained">SEND</Button>
                        </List>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}
