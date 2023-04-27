import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: 'initial' }} variant="h2">
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: 'initial' }} variant="h3">
          By MERN STACK
        </Typography>
        <Typography sx={{ fontFamily: 'initial' }} variant="h3">
        -----------------------------------------------------------------------------
        </Typography>
        <Typography sx={{ fontFamily: 'initial' }} variant="h5">
        In this Application Users can add new Books.

        </Typography>
        <Typography sx={{ fontFamily: 'initial' }} variant="h5">
        They can fetch all the Books in list and can able to update any book from there.
        </Typography>
        <Typography sx={{ fontFamily: 'initial' }} variant="h5">
        Further more they can delete any Book as well.
        </Typography>
      </Box>
    </div>
  );
};

export default About;