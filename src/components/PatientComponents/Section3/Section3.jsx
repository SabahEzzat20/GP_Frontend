import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../../images/doctor-nurses-special-equipment.jpg";
function Section3(){
  return (
    <Box>
      
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
            Orthopedista
            </Typography>
            <Typography variant="h4" align="center">
            Your health matters to us
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
            Prevention is better than cure
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;