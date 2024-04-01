import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  // Add as AddIcon,
  // Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import AvatarCard from "../components/shared/AvatarCard";

import { Link } from "../components/styles/StyledComponents";
import { bgGradient, matBlack } from "../constants/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { memo, useState, useEffect } from "react";
import { sampleChats } from "../constants/sampleData";

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

  const navigate = useNavigate();
  console.log(chatId);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => setIsMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
    // updateGroup("Updating Group Name...", {
    //   chatId,
    //   name: groupNameUpdatedValue,
    // });
  };

  useEffect(() => {
    // const groupData = groupDetails.data;
    // if (groupData) {
    //   setGroupName(groupData.chat.name);
    //   setGroupNameUpdatedValue(groupData.chat.name);
    //   setMembers(groupData.chat.members);
    // }

    // return () => {
    //   setGroupName("");
    //   setGroupNameUpdatedValue("");
    //   setMembers([]);
    //   setIsEdit(false);
    // };
    setGroupName("group name");
    setGroupNameUpdatedValue("group name");
  }, []);

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton
            // disabled={isLoadingGroupName}
            onClick={() => setIsEdit(true)}
          >
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
      >
        {/* <GroupsList myGroups={myGroups?.data?.groups} chatId={chatId} /> */}
        <GroupsList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
        {groupName && GroupName}
      </Grid>

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        {/* <GroupList
          w={"50vw"}
          myGroups={myGroups?.data?.groups}
          chatId={chatId}
        /> */}
        <GroupsList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack
    width={w}
    sx={{
      backgroundImage: bgGradient,
      height: "100vh",
      overflow: "auto",
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);
// const GroupListItem = memo(({ group, chatId }) => {
//   const { name, avatar, _id } = group;
//   //   return (
//   //     <Link
//   //       to={`?group=${_id}`}
//   //       onClick={(e) => {
//   //         if (chatId === _id) e.preventDefault();
//   //       }}
//   //     >
//   //       <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
//   //         <AvatarCard avatar={avatar} />
//   //         <Typography>{name}</Typography>
//   //       </Stack>
//   //     </Link>
//   //   );
//   return (
//     <Link>
//       <Stack>
//         <AvatarCard avatar={avatar}/> <Typography>{name}</Typography>
//       </Stack>
//     </Link>
//   );
// });

// eslint-disable-next-line react/display-name
const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
