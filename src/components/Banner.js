import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import banner from '../assests/images/banner2.jpg'

const Banner = () => {
  return (
    // In React.js with Material-UI, the Typography component is used to display text with predefined styles and variants. It provides a set of typography styles and options to easily control the appearance of text in your application
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:'50px'}}}position="relative" p="20px">
       
        <Typography color="Blue" fontWeight="600" fontSize="26px">
            24/7 <span style={{ color: 'Blue', textTransform: 'capitalize' }}>Fitness</span> 
        </Typography>
        <Typography fontWeight="900" sx={{fontSize:{lg:'44px',xs:'40px'},textDecoration:"underline"}} mb="23px" mt="30px">
           Look in the mirror<br/>That’s your competition
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Most Effective Exercises
        </Typography>
        {/* color kuch bhi ni le skte kewal success,error aur documentation maki dekh lo */}
        <a  href='#exercises'> <Button variant="contained"  color="error" sx={{backgroundColor:'#ff2625',padding:'15px',backgroundColor:'Blue'}}>Explore Exercise</Button></a>
        {/* <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize="120px">
            Exercise
        </Typography> */}
        <img src={banner} alt="banner" className='hero-banner-img' style={{width:'750px', height:'750px',color:'blue'}}/>
    </Box>
  )
}

export default Banner