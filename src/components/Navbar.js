import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { makeStyles } from '@material-ui/core/styles';
import circle from '../images/circle.png'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Contact from './Contact'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '15px'
    },
    navBg: {
        backgroundColor: 'white'
    },
    footerRightSection: {
        display: 'inline-block',

        [theme.breakpoints.up('md')]: {
            float: 'right',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto'
        }
    },
    content: {
        margin: '15px',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            margin: '5px',
            fontSize: '15px',
        },
        '&:hover': {
            borderBottom: '5px solid grey',
            cursor: 'pointer'
        }
    },
    name: {
        fontWeight: 'bold',
        marginLeft: '3px',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    jobTitle: {
        marginLeft: '3px',
        fontSize: '12px',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    imgSize: {
        backgroundImage: `url(${circle})`,
        width: '45px',
        height: '45px',
        float: 'left',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    profileContainer: {
        flexGrow: '1',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const [showContact, setShowContact] = React.useState(false)

    const onClickShowContact = () => {
        setShowContact(true)
    }

    const onCloseContact = () => {
        setShowContact(false)
    }

    function scrollToAboutMe(){
        var aboutMe = document.getElementById("aboutMe")
        aboutMe.scrollIntoView();
    }

    function scrollToBlog() {
        var blog = document.getElementById("blog")
        blog.scrollIntoView();
    }



    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className={classes.profileContainer}>
                        <Typography component="span" className={classes.imgSize}> </Typography>
                        <Typography component="span" className={classes.name}>Ramanujan A</Typography> <br />
                        <Typography component="span" className={classes.jobTitle}>UI UX Developer</Typography>
                    </div>
                    <div className={classes.footerRightSection}>
                        <span className={classes.content}>Work</span>
                        <span onClick={scrollToAboutMe} className={classes.content}>About Me</span>
                        <span onClick={scrollToBlog} className={classes.content}>Blog</span>
                        <span onClick={onClickShowContact} className={classes.content}>Contact</span>
                        <span className={classes.content}>Hire Me</span>
                    </div>
                </div>

                <Contact isOpen={showContact} isClose={onCloseContact}/>
            </Container>
        </div>
    )
}
