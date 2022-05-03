import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Tabs, Paper, Tab, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import Friends from "./pages/Friends";
import Chats from "./pages/Chats";

const App = (): JSX.Element => {
  const [CurrentTab, setCurrentTab] = useState<string>("friends");
  const [chatId, setChatId] = useState<number | null>(null);

  const ChangeTab = (changedValue: string) => {
    setCurrentTab(changedValue);
  };

  const moveToChat = (chatId: number) => {
    setCurrentTab("chats");
    setChatId(chatId);
  };

  return (
    <section>
      <Box sx={{ pb: "80px" }}>
        {CurrentTab === "friends" && <Friends changeTab={moveToChat} />}
        {CurrentTab === "chats" && <Chats chatId={chatId} />}
      </Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, right: 0, left: 0, height: "80px" }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={CurrentTab}>
          <Tab
            icon={<GroupIcon />}
            label="친구"
            value={"friends"}
            onClick={() => ChangeTab("friends")}
          />
          <Tab
            icon={<MessageIcon />}
            label="채팅"
            value={"chats"}
            onClick={() => ChangeTab("chats")}
          />
        </Tabs>
      </Paper>
    </section>
  );
};
// ChargeEvent는 실시간 업데이트 해주는 역할,그리고 HTMLInputElement는 입력받는 것
export default App;
