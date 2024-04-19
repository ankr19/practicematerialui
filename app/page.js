"use client";
import Layout1 from "@/components/Layout/Layout1";
import Layout2 from "@/components/Layout/Layout2";
import Layout3 from "@/components/Layout/Layout3";
import Layout4 from "@/components/Layout/Layout4";
import {
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Cloud,
  ContentCopy,
  ContentCut,
  ContentPaste,
} from "@mui/icons-material";
export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // <Layout2/>
    // <Layout3/>
    // <Layout4 />
    <>
      Home
      <div>
        <div className="flex justify-between items-center">
          <div>Testing Header</div>
          <div>
            <IconButton
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableelevation
              onClick={handleClick}
            >
              <FilterListIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Paper sx={{ width: 320, maxWidth: "100%" }}>
                <MenuList >
                  <MenuItem>
                  <Typography variant="body2" color="text.secondary">
                    <FormControl sx={{ m: 0, minWidth: 300 }} size="small">
                      <InputLabel id="demo-select-small-label">Age</InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{ borderRadius: "15px" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘C
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      ⌘V
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Cloud fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Web Clipboard</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
