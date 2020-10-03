import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Aboutme from '../images/aboutme.jpg'
import Contact from './Contact'
import Resume from './Resume'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '10px'
    },
    imgSize: {
        backgroundImage: `url(${Aboutme})`,
        // height: '100vh',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',


        [theme.breakpoints.down('lg')]: {
            height: '100vh',
        },     
        [theme.breakpoints.down('sm')]: {
            height: '100vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '50vh',
        }
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
    } ,
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
    aboutMeText: {
        fontSize: '2rem',
        color: 'black',
        fontWeight: 'bold',
        marginTop: '3rem'
    },
    whoAmITxt: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: 'lightgrey',    
    },
    btnContainer: {

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    const [modal, setModal] = React.useState(false)
    const [showResume, setShowResume] = React.useState(false)

    const onModalClick = () => {
        setModal(true)
    }

    const resetModal = () => {
        setModal(false)
    }

    const onClickSeeMyResume = () => {
        setShowResume(true)
    }

    const onCloseResume = () => {
        setShowResume(false)
    }
    return (
        <div id="aboutMe" className={classes.root}>
            <Container maxWidth="lg">
              <div className="row">
                 <div className="col-sm-6">
                 <Typography component="div" className={classes.imgSize}>
                 </Typography>
                 </div>
                 <div className="col-sm-6">
                 <Typography component="h4" className={classes.aboutMeText}>ABOUT ME</Typography>
                 <Typography component="h1" className={classes.whoAmITxt}>WHO AM I</Typography>
                 <Typography component='p'>
                 But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                  pain was born and I will give you a complete account of the system, and expound the 
                  actual teachings of the great explorer of the truth, the master-builder of human happiness.
                   No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure 
                   rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                 </Typography>
 
                 <Typography component="div" className={classes.btnContainer}>
                 <Button onClick={onModalClick} variant="contained" className={classes.hireBtn} color="textSecondary">HIRE ME</Button>
                 <Button onClick={onClickSeeMyResume} variant="contained" className={classes.resumeBtn} color="textSecondary">SEE MY RESUME</Button>
                 </Typography>
                 </div>
              </div>

              {<Contact isOpen={modal} isClose={resetModal} />}

              { <Resume isOpen={showResume} isClose={onCloseResume}/> }
            </Container>
        </div>
    )
}
