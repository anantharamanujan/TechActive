import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import bgImage from '../../images/lightgrey.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '1rem'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        background: 'grey',
        opacity: 0.6
    },
    titleTxt: {
        float: 'left',
        fontWeight: 'bold'
    },
    yearTxt: {
        float: 'right',
        fontWeight: 'bold'
    }
}));

export default function ProjectSummary({ clickHandler, project }) {
    const classes = useStyles();

    return (

        <Card className={classes.root}
            onClick={(e) => clickHandler(e, project)}
        >
            <CardMedia
                className={classes.media}
                image={bgImage}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"> {project.category} </Typography>
                <Typography component="div">
                    <Typography color="textSecondary" component="span" className={classes.titleTxt}>{project.title}</Typography>
                    <Typography color="textSecondary" component="span" className={classes.yearTxt}>{project.year}</Typography>
                </Typography>
            </CardContent>
        </Card>

    )
}
