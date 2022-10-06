import React, { useState, useEffect } from "react"
import { useIsMobile } from "../utils/isMobile.util"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"

const Header = () => {
  const isMobile = useIsMobile()
  return isMobile ? (
    <Box>
      <Box
        justifyContent="space-between"
        sx={{
          background: "black",
          display: "flex",
          position: "sticky",
          top: "0",
          zIndex: "999",
        }}
      >
        <img src="./uni.logo.svg" alt="Uni Logo" width="50" height="60" />
        <img src="./menu.logo.svg" alt="Menu Logo" width="50" height="60" />
      </Box>
    </Box>
  ) : (
    <Box>
      <Box
        justifyContent="space-between"
        sx={{
          background: "black",
          display: "flex",
          position: "sticky",
          top: "0",
          zIndex: "999",
          alignItems: "center",
        }}
      >
        <Box ml="20px">
          <img src="./uni.logo.svg" alt="Uni Logo" width="50" height="60" />
        </Box>

        <Box
          display="flex"
          sx={{ columnGap: "20px", color: "white", mr: "20px" }}
        >
          <Box>Pay 1/3rd Card</Box>
          <Box>Pay 1/2 Card</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
