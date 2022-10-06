import React, { useState, useEffect } from "react"
import { useIsMobile } from "../utils/isMobile.util"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"

const CardComponent = () => {
  const isMobile = useIsMobile()
  return isMobile ? (
    <Box>
      <Box
        justifyContent="center"
        sx={{
          backgroundImage: `url(${"./moon-background.jpg"})`,
          display: "flex",
          height: "800px",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box color="white" sx={{ fontSize: "40px" }}>
          Uni Pay 1/2 Card
        </Box>
      </Box>
    </Box>
  ) : (
    <Box>
      <Box
        justifyContent="center"
        sx={{
          backgroundImage: `url(${"./moon-background.jpg"})`,
          display: "flex",
          height: "800px",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        Hello World Desktop
      </Box>
    </Box>
  )
}

export default CardComponent
