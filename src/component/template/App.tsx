import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import type { PostMeta } from "@/Type";

type Props = {
  posts: PostMeta[];
  totalPage: number;
};

const App = ({}: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}></Box>
  );
};

export default App;
