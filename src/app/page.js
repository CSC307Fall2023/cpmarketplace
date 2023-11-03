/*import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Welcome to CSC 307</h1>
      <p>
        This application is a Next.js application. It already contains a way to login and sign-up as well as a rough ToDo list application as a way to demonstrate create and update of a todo. 
      </p>
      <h2>Documentation</h2>
      <ul>
        <li>NextJS: <a href="https://nextjs.org/docs">https://nextjs.org/docs</a></li>
        <li>Material UI: <a href="https://mui.com/material-ui/getting-started/">https://mui.com/material-ui/getting-started/</a></li>
        <li>Prisma: <a href="https://www.prisma.io/docs/getting-started">https://www.prisma.io/docs/getting-started</a></li>
      </ul>
      <h2></h2>
    </>
  )
}*/

"use client"

import Image from 'next/image'

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


//import landingImage from '../../public/landing.jpg';


// const hommmmm = (
//     <div className="home-container">
//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           <img src="landing.jpg" alt="" />
//         </div>
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Your Favourite Food Delivered Hot & Fresh
//           </h1>
//           <p className="primary-text">
//             Healthy switcher chefs do all the prep work, like peeding, chopping
//             & marinating, so you can cook a fresh food.
//           </p>
//         </div>
//         <div className="home-image-section">
//           <img src="landing.jpg" alt="" />
//         </div>
//       </div>
//     </div>
//   );


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            SLOMarketPlace
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}

        
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          {/* <img src='landing.jpg' alt="Landing Image" /> */}
          {/* {hommmmm} */}

          <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: 372,
        width: 660,
      }}
    >
      <img
        alt="Landing Image"
        src="landing.jpg"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </Box>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Mission
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Clean up clutter, connect with your Cal Poly community, and contribute to a greener world on SLOMarket, where sustainable swaps build a brighter future.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Start Selling</Button>
            
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

