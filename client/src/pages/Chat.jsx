import {
  Fragment,
  // useCallback,
  // useEffect,
  useRef,
  // useState,
} from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import { orange } from "../constants/color";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";
// import FileMenu from "../components/dialogs/FileMenu";
// import MessageComponent from "../components/shared/MessageComponent";
// import { getSocket } from "../socket";
// import {
//   ALERT,
//   CHAT_JOINED,
//   CHAT_LEAVED,
//   NEW_MESSAGE,
//   START_TYPING,
//   STOP_TYPING,
// } from "../constants/events";
// import { useChatDetailsQuery, useGetMessagesQuery } from "../redux/api/api";
// import { useErrors, useSocketEvents } from "../hooks/hook";
// import { useInfiniteScrollTop } from "6pp";
// import { useDispatch } from "react-redux";
// import { setIsFileMenu } from "../redux/reducers/misc";
// import { removeNewMessagesAlert } from "../redux/reducers/chat";
// import { TypingLoader } from "../components/layout/Loaders";
// import { useNavigate } from "react-router-dom";

const user = {
  _id: "ljsbdf",
  name: "saif",
};

const Chat = () => {
  const containerRef = useRef(null);
  // const fileMenuRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessage.map((i) => (
          <MessageComponent key={i._id} message={i} user={user} />
        ))}
      </Stack>
      <form
        style={{
          height: "10%",
        }}
        // onSubmit={submitHandler}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
            // onClick={handleFileOpen}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder="Type Message Here..."
            // value={message}
            // onChange={messageOnChange}
          />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              bgcolor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      {/* <FileMenu anchorE1={fileMenuAnchor} chatId={chatId} /> */}
      <FileMenu />
    </Fragment>
  );
};
export default AppLayout()(Chat);
