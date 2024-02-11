import { useState, useEffect } from 'react'
import { Typography } from "@mui/material"
import type { PostMeta } from "@/Type";
import type {  GetStaticProps } from "next";
import getPost from "@/service/accessToTop";
import { Box } from "@mui/system";
import AppCard from '../App/AppCard'

type Props = {
    posts: PostMeta[];
    totalPage: number;
};


const App = ({ posts, totalPage }: Props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true)
  }, [])
  
    return (
        mounted && 
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography>
                Hi
            </Typography>
        </Box>
    );
};

export default App;