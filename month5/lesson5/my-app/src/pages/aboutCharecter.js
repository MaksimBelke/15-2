import React from "react";
import { useLocation } from "react-router-dom";
import {Box,Typography} from "@mui/material"

const AboutChar = () => {
    const location = useLocation()
const char = location?. state?. item;
console.log(char)
    return<>
    <Box>
        <Typography> {char.name} </Typography>
        <Typography>{char.birthday}</Typography>
    </Box>
    </>
}

export default AboutChar;