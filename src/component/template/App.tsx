import { useState, useEffect } from 'react'
import type { PostMeta } from "@/Type";
import { Box } from "@mui/system";

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
        </Box>
    );
};

export default App;