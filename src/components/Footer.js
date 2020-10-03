import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '10px',
        backgroundColor: '#9e9e9e'
    },
    footerTxt: {
        color: 'white',
        margin: '10px'
    },
    iconBg: {
        color: 'white',
        margin: '5px'
    },
    footerRightSection: {
        display: 'inline-block',

        [theme.breakpoints.up('md')]: {
            float: 'right',
        }
    },
    content: {
        margin: '15px',
        [theme.breakpoints.down('sm')]: {
            margin: '5px'
        }
    }
}));

const style = {
    backgroundColor: '#1e2429',
    borderRadius: '5px',
    opacity: 0.7,
    border: 'none',
    color: 'white'
}

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <MDBFooter color="grey" className="font-small pt-4 mt-4">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <span className="title">&copy; {new Date().getFullYear()} U143 - Free Templates</span>
                                <span style={{ margin: '0 10px' }}>
                                    <InstagramIcon className={classes.iconBg} />
                                    <FacebookIcon className={classes.iconBg} />
                                    <MailIcon className={classes.iconBg} />
                                    <TwitterIcon className={classes.iconBg} />
                                </span>
                            </MDBCol>
                            <MDBCol md="6">
                                <div className={classes.footerRightSection}>
                                    <span className={classes.content}>Work</span>
                                    <span className={classes.content}>About Me</span>
                                    <span className={classes.content}>Blog</span>
                                    <span className={classes.content}>Contact</span>
                                    <span className={classes.content}>Hire Me</span>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </Container>
        </div>
    )
}
