import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bgImage from '../../images/lightgrey.jpg'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    show: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
        }
    },
    imgSize: {
        backgroundImage: `url(${bgImage})`,
        // height: '100vh',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',


        [theme.breakpoints.down('lg')]: {
            height: '90vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '70vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
        }
    },
    controlBtnContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    controlBtn: {
        outline: 'none !important'
    },
    projectInfo: {
        flexGrow: '1'
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

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDetails(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        // setOpen(false);
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

                <div className="row">
                    <div className="col-md-8">
                        <Slider {...settings}>
                            <Typography component="div" className={classes.imgSize}> </Typography>
                            <Typography component="div" className={classes.imgSize}> </Typography>
                            <Typography component="div" className={classes.imgSize}> </Typography>
                        </Slider>
                    </div>
                    <style jsx>{`
                     .projectInfoContainer{
                        display: flex;
                        flex-direction: column;
                    }
                    `}
                    </style>
                    <div className="col-md-4 show projectInfoContainer">
                        <div className={classes.projectInfo}>
                            <p style={{ marginTop: '30px' }}>{props.particularProject.title}</p>
                            <p>{props.particularProject.category}  |  {props.particularProject.year}</p>
                            <p>Client:</p>
                            <p>{props.particularProject.client}</p>
                            <p>{props.particularProject.description}</p>
                        </div>

                        <div className={classes.controlBtnContainer}>
                            <Button disabled={props.selectedIndex === props.start}
                                onClick={() => props.handlePrevious(props.selectedIndex)}
                                className={classes.controlBtn}>
                                <ArrowBackIosIcon fontSize="small" />Previous
                            </Button>

                            <Button disabled={props.selectedIndex === props.end}
                                onClick={() => props.handleNext(props.selectedIndex)}
                                className={classes.controlBtn}>
                                Next<ArrowForwardIosIcon fontSize="small" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
