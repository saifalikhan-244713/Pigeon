import { Add as AddIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";
// import { transformImage } from "../../lib/features";

const UserItem = ({
  user,
  handler,
  handlerIsLoading,
  //   isAdded = false,
  //   styling = {},
}) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        // {...styling}
      >
        {/* <Avatar src={transformImage(avatar)} /> */}
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            // bgcolor: isAdded ? "error.main" : "primary.main",
            bgcolor: "primary.main",
            color: "white",
            // "&:hover": {
            //   //   bgcolor: isAdded ? "error.dark" : "primary.dark",
            //   bgcolor: "primary.dark",
            // },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {/* {isAdded ? <RemoveIcon /> : <AddIcon />} */}
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
