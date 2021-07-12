import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import classes from './One.module.css';
import {
  AppBar, Container, Toolbar,
  IconButton, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

const useStayles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    botton: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostConteiner: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  CardMedia: {
    paddingTop: '56.25%'
  },
  CardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

const One = () => {
  const classes = useStayles();
  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge='start'
              color='inherit' aria-laabel='menu' className={ classes.menuButton }>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={ classes.title }> My Mens Blog</Typography>
            <Box mr={ 3 }>
              <Button color='inherit' variant='outlined'>log In</Button>
            </Box>
            <Button color='secondary' variant='contained'>Sing Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper className={ classes.mainFeaturesPost }
          style={ { backgroundImage: `url(https://source.unsplash.com/random)` } } >
          <Container fixed>
            <div className={ classes.overlay } />
            <Grid container>
              <Grid item md={ 6 }>

                <div className={ classes.mainFeaturesPostConteiner }>
                  <Typography
                    component='h1'
                    variant='h3'
                    color='inherit'
                    gutterBottom>
                    Web Developer Blog of Success
                  </Typography>
                  <Typography
                    component='h5'
                    variant='h5'
                    color='inherit'
                    paragraph
                  >
                    Web My About
                    Ever needed custom formatted sample / test data, like, bad? Well, that's the idea of this script. It's a free, open source tool written in JavaScript, PHP and MySQL that lets you quickly generate large volumes of custom data in a variety of formats for use in testing software, populating databases, and... so on and so forth.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={ classes.mainContent }>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>My blog</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph> The out-the-box script contains the sort of functionality you generally need. But nothing's ever complete - maybe you need to generate random esoteric math equations, pull random tweets or display random images from Flickr with the word "Red-backed vole" in the title. Who knows. Everyone's use-case is different. </Typography>
            <div className={ classes.mainButtons }>
              <Grid container spacing={ 2 } justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary' >Start Now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' >leatn mo</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
<Container className={classes.cardGrid} maxWidth='md'>
    <Grid container spacing={4}>
      {cards.map((card ) =>(
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.CardMedia} 
              image='https://source.unsplash.com/random'
              title='image tittle'
            />
            <CardContent className={classes.CardContent}>
              <Typography variant='h5' gutterBottom>
                Blog Post
              </Typography>
              <Typography >
                Then, once you've whet your appetite, there's a free, fully functional, GNU-licensed version available for download. Alternatively, if you want to avoid the hassle of setting it up on your own server, you can donate $20
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' color="primary">
                View
              </Button>
              <Button size='small' color="primary">
                Edit
              </Button>
              <LayerIcon/>
              <PlayCircleFilledIcon />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
</Container>
      </main>


    </>
  )
}


export default One;