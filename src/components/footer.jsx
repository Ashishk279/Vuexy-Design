import { Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
    return (
        <footer style={{marginLeft:'4rem', padding: '1em 0'}}>
            <Typography variant="body2">© 2024, made with ❤️ by Pixinvent
 <span style={{  }}>
                <a href="#" style={{ color: 'gray', textDecoration: 'none', margin: '0px 20px' }}>License</a>
                <span>|</span>
                <a href="#" style={{ color: 'gray', textDecoration: 'none' , margin: '0px 20px'}}>More Themes</a>
                <span>|</span>
                <a href="#" style={{ color: 'gray', textDecoration: 'none', margin: '0px 20px' }}>Documentation</a>
                <span>|</span>
                <a href="#" style={{ color: 'gray', textDecoration: 'none' , margin: '0px 20px'}}>Support</a>
            </span>

            </Typography>
           
            
        </footer>
    )
}

