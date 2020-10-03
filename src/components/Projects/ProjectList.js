import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectContext } from '../../contexts/ProjectContextProvider'
import Typography from '@material-ui/core/Typography';
import ProjectSummary from './ProjectSummary';
import Container from '@material-ui/core/Container';
import ProjectDetails from './ProjectDetails'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    btnStyle: {
        borderRadius: '100px',
        background: 'white',
        border: '1px solid black',
        outline: 'none !important',
        '&:hover': {
            background: "white",
        }
    }
}));

export default function ProjectList() {
    const classes = useStyles();
    const { projects } = React.useContext(ProjectContext)
    const [projectDetailState, setProjectDetailState] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [limit, setLimit] = React.useState(3)
    const [loader, setLoader] = React.useState(false)
    const [showBtn, setShowBtn] = React.useState(true)

    const onClickHandler = (e, project) => {
        setProjectDetailState(true);
        setSelectedProject(project);
    }

    const resetListData = () => {
        setProjectDetailState(false);
        setSelectedProject(null);
    }

    const handleNext = (index) => {
        setSelectedProject(projects[index + 1]);
    }
    const handlePrevious = (index) => {
        setSelectedProject(projects[index - 1]);
    }

    const onLoadMore = () => {
        setLimit(limit + 3)
    }

    return projects.length ? (
        <Container maxWidth="lg">
            <div className="row">
                {projects.slice(0, limit).map((project) => {
                    return (
                        <div className="col-sm-4">
                            <ProjectSummary clickHandler={onClickHandler} project={project} key={project.id} />
                        </div>
                    )
                })}
                <Grid container justify="center" >
                    {showBtn &&
                        <Button onClick={onLoadMore} variant="contained" color="textSecondary" className={classes.btnStyle}>Load More Work</Button>
                    }
                    {loader && <CircularProgress />}
                </Grid>
            </div>

            {projectDetailState &&
                <ProjectDetails
                    selectedIndex={projects.indexOf(selectedProject)}
                    isClose={resetListData}
                    isOpen={projectDetailState}
                    particularProject={selectedProject}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    start={0}
                    end={projects.length - 1}
                />
            }


        </Container>
    ) :
        (
            <Container maxWidth="lg">
                <Typography className={classes.root} component="div"> No Projects Found </Typography>
            </Container>
        )
}
