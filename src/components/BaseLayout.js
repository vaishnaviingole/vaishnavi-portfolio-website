import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import SkillsAndEducation from './SkillsEd/SkillsEd';
import Projects from './portfolio/Projects';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

export default function BaseLayout() {
   const [darkMode, setDarkMode] = useState(false);
   const [loading, setLoading] = useState(true);

   function handleToggleDarkMode() {
      const oppositeOfCurrentDarkMode = !darkMode;
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      const detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }

      // Simulate a delay to show the loading message
      const timeout = setTimeout(() => {
         setLoading(false);
      }, 3000); // Adjust the duration as needed

      return () => clearTimeout(timeout);
   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               {loading ? (
                  // Funny loading message and spinner goes here
                  <div className={Style.loadingContainer}>
                    
                     <HashLoader
                        color={'#36D7B7'} // You can customize the color
                        loading={loading}
                        size={150} // You can adjust the size
                     />
                     {/* <div className='text'>
                     <p><h3>Coding: turning coffee into code.☕💻</h3></p>
                     </div> */}
                     
                      {/* <p>Compiling awesomeness... this might take a few npm installs! 🚀📦</p> */}
                  </div>
               ) : (
                  // Render your content when not loading
                  <Routes>
                     <Route exact path={'/'} element={<Home />} />
                     {/* <Route exact path={'/Education'} element={<Education/>}/> */}
                     <Route exact path={'/SkillsEd'} element={<SkillsAndEducation />} />
                     <Route exact path={'/about'} element={<About />} />
                     <Route exact path={'/portfolio'} element={<Projects />} />
                  </Routes>
               )}
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  {/* <p>template created with &hearts; by <a href={'https://paytonpierce.dev'}>Payton Pierce</a></p>
                  <p>&copy; 2023</p> */}
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
