import React, { useState } from "react";
import {
    Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css"
const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer 
      PaperProps={{
            style: { width: "15%" },
          }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className="button">
        <Button className="buttons">
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              Home
            </ListItemText>
          </ListItem>
          </Button>
          <Button className="buttons">
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              About
            </ListItemText>
          </ListItem>
          </Button>
          <Button className="buttons">
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              Contact
            </ListItemText>
          </ListItem>
          </Button>
          <Button className="buttons">
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              FAQ
            </ListItemText>
          </ListItem>
          </Button>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;