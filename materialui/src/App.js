import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import classes from './One.module.css';
import {
  AppBar, Container, Toolbar,
  IconButton, Typography, Box, Paper, Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
    right:0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostConteiner: {
    position: "relative",
    pading: theme.spacing(9)
  }
}))

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
                    gutterBottom
                  >
                    Web My Man Post Blog
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

                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>


    </>
  )
}


export default One;