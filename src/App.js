
import { Box, createTheme, Divider, Stack, ThemeProvider } from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (

    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
    <Stack  direction="row"   divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent="space-between">
    <Sidebar setMode={setMode} mode={mode}/>
    <Feed />
    <RightBar/>
    </Stack>
    </Box>
    </ThemeProvider>
  );

}

export default App;
