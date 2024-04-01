import { Grid, IconButton, Tooltip } from "@mui/material";
import {
  // Add as AddIcon,
  // Delete as DeleteIcon,
  // Done as DoneIcon,
  // Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  // Menu as MenuIcon,
} from "@mui/icons-material";
import { matBlack } from "../constants/color";
import { useNavigate } from "react-router-dom";
const Groups = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const IconBtns = (
    <>
      {/* <Box
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
          </Box> */}

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
        groups list
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
      </Grid>
    </Grid>
  );
};

export default Groups;
