import {
  Container,
  Grid,
  IconButton,
  List,
  TextField,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListItem,
  Avatar,
} from "@mui/material";
import { ChangeEvent, useState, useEffect, MouseEvent } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Modal from "@mui/material/Modal";
import * as React from "react";
import axios from "axios";
import ImageIcon from "@mui/icons-material/Image";
import ChatTitle from "./chatTitle";
import ChatLastestStatus from "./ChatLastestStatus";
import { chats } from "../data";


const ChatList = (): JSX.Element => {

  const [chatList, setChatList] = useState(chats);

    
  return (
    <List>
    {chatList.map((chats) => {
      return (
        <section key={chats.id}>
        <Grid item sm={12}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<ChatTitle name={chats.name} date={chats.date}/>} secondary={<ChatLastestStatus message={chats.message}/>} />
          </ListItemButton>
        </Grid>
      </section>
      );
    }
  )};
  </List>
  )
};

export default ChatList;