import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {
  AppBar, Container, Toolbar, Dialog,
  IconButton, Typography, Box, Paper,
  Grid, Card, CardMedia, CardContent,
  CardActions, BottomNavigation, BottomNavigationAction,
  DialogTitle, DialogContent, DialogContentText, 
  TextField, DialogActions,

} from '@material-ui/core';


//import BottonNavigationIcon from '@material-ui/icons/BottonNavigation';
//import BottonNavigationIconAction from '@material-ui/icons/BottonNavigationIconAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationIcon from '@material-ui/icons/LocationOn';


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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStayles();

  const [value, setValue] = React.useState('recents')

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

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
              <Button color='inherit' variant='outlined' onClick={ handleClickOpen } >log In</Button>
              <Dialog open={ open } onClose={ handleClose } area-labelledby='form-dialog-title' >
                <DialogTitle id='form-dialog-title'>log in</DialogTitle>
                <DialogContent>
                  <DialogContentText> Log in to see videos</DialogContentText>
                  <TextField
                    autoFocis
                    margin='dense'
                    id='name'
                    label='Email Adress'
                    type='email'
                    fullWidth
                  />
                  <TextField
                    autoFocis
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>Cancel</Button>
                  <Button onClick={handleClose} color='primary'>log in</Button>
                </DialogActions>
              </Dialog>



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
        <Container className={ classes.cardGrid } maxWidth='md'>
          <Grid container spacing={ 4 }>
            { cards.map((card) => (
              <Grid item key={ card } xs={ 12 } sm={ 6 } md={ 4 }>
                <Card className={ classes.card }>
                  <CardMedia className={ classes.CardMedia }
                    image='https://source.unsplash.com/random'
                    title='image tittle'
                  />
                  <CardContent className={ classes.CardContent }>
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
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            )) }
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant='h6' align='center' gutterBottom >Footer</Typography>
        <BottomNavigation
          value={ value }
          onChange={ handleChange }
          className={ classes.root }
        >
          <BottomNavigationAction
            label='Recents'
            value='recents'
            icon={ <RestoreIcon /> }
          />
          <BottomNavigationAction
            label='Favirite'
            value='favirite'
            icon={ <FavoriteIcon /> }
          />
          <BottomNavigationAction
            label='Nearby'
            value='nearby'
            icon={ <LocationIcon /> }
          />
          <BottomNavigationAction
            label='Folder'
            value='folder'
            icon={ <FolderIcon /> }
          />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' componets='p' variant='subtitle1'>
          Web Deweloper Blog React js Material Ui site
        </Typography>

      </footer>
    </>
  )
}


export default App;