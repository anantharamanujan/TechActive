import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import profile from '../images/profile.jpeg'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import Contact from './Contact';
import Resume from './Resume'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    imgSize: {
        backgroundImage: `url(${profile})`,
        height: '80vh',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        [theme.breakpoints.down('lg')]: {
            height: '50vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '45vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
        }
    },

    introHello: {
        fontWeight: 'lighter'
    },
    introName: {
        fontSize: '26px',
        fontWeight: 700
    },
    introRole: {
        fontSize: '12px',
        fontWeight: 'lighter'
    },
    socialIcons: {
        margin: '15px 0'
    },
    control: {
        padding: theme.spacing(2),
        color: 'grey'
    },
    hireBtn: {
        backgroundColor: '#808080',
        color: 'white',
        marginRight: '15px',
        borderRadius: '70px',
        outline: 'none !important',
        padding: '8px 40px',

        '&:hover': {
            background: "#808080",
        },
        [theme.breakpoints.down('sm')]: {
            margin: '5px'
        }
    },
    resumeBtn: {
        backgroundColor: 'white',
        borderRadius: '70px',
        outline: 'none !important',
        border: '1px solid grey',
        '&:hover': {
            background: "white",
        },
        [theme.breakpoints.down('sm')]: {
            margin: '5px'
        }
    },
    iconBg: {
        margin: '5px',
    },
    btnContainer: {

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
}))

export default function Introduction() {
    const classes = useStyles();
    const [modal, setModal] = React.useState(false)
    const [resumeDrawer, setResumeDrawer] = React.useState(false)

    const onModalClick = () => {
        setModal(true)
    }

    const resetModal = () => {
        setModal(false)
    }

    const onHandleClick = () => {
        setResumeDrawer(true)
    }
    const onHandleClose = () => {
        setResumeDrawer(false)
    }

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <div className="row">
                    <div className="col-sm-6">
                        <Typography component="div">
                            <Typography component="div" className={classes.introHello}>Hello, I'm</Typography>
                            <Typography component="div" className={classes.introName}>Ramanujan A</Typography>
                            <Typography component="div" className={classes.introRole}>UI & UX</Typography>
                            <Typography component="div" className={classes.socialIcons}>
                                <InstagramIcon color="secondary" className={classes.iconBg} />
                                <FacebookIcon color="primary" className={classes.iconBg} />
                                <MailIcon color="secondary" className={classes.iconBg} />
                                <TwitterIcon color="action" className={classes.iconBg} />
                            </Typography>
                            <Typography component="div" className={classes.btnContainer}>
                                <Button onClick={onModalClick} variant="contained" className={classes.hireBtn}>HIRE ME</Button>
                                <Button onClick={onHandleClick} variant="contained" component="button" className={classes.resumeBtn}>SEE MY RESUME</Button>
                            </Typography>
                        </Typography>
                    </div>

                    <div className="col-sm-6">
                        <Typography component="div" className={classes.imgSize}> </Typography>
                    </div>
                </div>


                <Grid item xs={12} >
                    <Grid container justify="center" >
                        <Typography className={classes.control} component="span">All</Typography>
                        <Typography className={classes.control} component="span">App</Typography>
                        <Typography className={classes.control} component="span">Website</Typography>
                        <Typography className={classes.control} component="span">Interaction</Typography>
                    </Grid>
                </Grid>

                {<Contact isOpen={modal} isClose={resetModal} />}

                {<Resume isOpen={resumeDrawer} isClose={onHandleClose} />}
            </Container>
        </div>
    )
}
