import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";

//styling
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar" >
        <Toolbar className="toolbar">
          <div className="left-content">
            <Link to="/" className={["home-link"]}>
              <IconButton
                size="large"
                edge="start"
                style={{ color: "black"}}
              >
                <HomeIcon fontSize="large" />
              </IconButton>
            </Link>
          </div>
          <div className="center-content">
            <Typography
              variant="h6"
              component="div"
              className={"link-container"}
            >
              <ul className={"link-list"}>
                <li className={"link-item"}>
                  <Link to="/about">About</Link>
                </li>
                <li className={"link-item"}>
                  <Link to="/work">Work</Link>
                </li>
                <li className={"link-item"}>
                  <Link to="/education">Education</Link>
                </li>
                <li className={"link-item"}>
                  <Link to="/photography">Photography</Link>
                </li>
                <li className={"link-item"}>
                  <Link to="/nature">Nature</Link>
                </li>
              </ul>
            </Typography>
          </div>
          {/* Add any other elements you want on the right side */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
