import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";
// import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        // src={transformImage(user?.avatar?.url)}
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      {/* <ProfileCard heading={"Bio"} text={user?.bio} /> */}
      <ProfileCard heading={"Bio"} text={"sgcgdgvf iusgsdf kjabgdf"} />

      <ProfileCard
        heading={"Username"}
        // text={user?.username}
        text={"saif khan"}
        Icon={<UserNameIcon />}
      />
      {/* <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} /> */}
      <ProfileCard heading={"Name"} text={"arshia"} Icon={<FaceIcon />} />

      <ProfileCard
        heading={"Joined"}
        text={moment('2024-11-04T18:30:00.000Z').fromNow()}
        // text={moment}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

// const Profile = () => {
//   return <div>Profile</div>;
// };
// const ProfileCard = () => <div>ProfileCardd</div>;
// export default Profile;
