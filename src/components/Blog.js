import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    readmeTxt: {
        // display: 'flex',
        // justifyContent: 'Center',
        fontSize: '2rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textAlign: 'center',
        height: '50vh'
    },
    subTxt: {
        color: 'grey',
        fontSize: '1rem',
    }
}));

export default function Blog() {
    const classes = useStyles();
    return (
        <div id="blog"  className={classes.root}>
            <Container maxWidth="lg">
              <div className={classes.readmeTxt}>
                  <div>READ ME</div>
                  <div className={classes.subTxt}>Sometimes I write something smart</div>
              </div>
            </Container>
        </div>
    )
}
