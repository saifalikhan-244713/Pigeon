import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  // Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/material";

import UserItem from "../shared/UserItem";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   useAvailableFriendsQuery,
//   useNewGroupMutation,
// } from "../../redux/api/api";
// import { useAsyncMutation, useErrors } from "../../hooks/hook";
// import { setIsNewGroup } from "../../redux/reducers/misc";
// import toast from "react-hot-toast";
import { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";

const NewGroup = () => {
  const groupName = useInputValidation("");

  // const { isNewGroup } = useSelector((state) => state.misc);
  // const dispatch = useDispatch();
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  // const { isError, isLoading, error, data } = useAvailableFriendsQuery();
  // const [newGroup, isLoadingNewGroup] = useAsyncMutation(useNewGroupMutation);

  const selectMemberHandler = (id) => {
    setMembers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, isAddded: !user.isAdded } : user
      )
    );
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };


  // const errors = [
  //   {
  //     isError,
  //     error,
  //   },
  // ];

  // useErrors(errors);

  const submitHandler = () => {
    // if (!groupName.value) return toast.error("Group name is required");
    // if (selectedMembers.length < 2)
    //   return toast.error("Please Select Atleast 3 Members");
    // newGroup("Creating New Group...", {
    //   name: groupName.value,
    //   members: selectedMembers,
    // });
    // closeHandler();
  };

  // const closeHandler = () => {
    // dispatch(setIsNewGroup(false));
  // };

  return (
    // <Dialog onClose={closeHandler} open={isNewGroup}>
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((i) => (
            <UserItem user={i} key={i._id} handler={selectMemberHandler} />
          ))}
        </Stack>

        {/* {isLoading ? (
            <Skeleton />
          ) : (
            data?.friends?.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          )} */}

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="text"
            color="error"
            size="large"
            // onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
            // disabled={isLoadingNewGroup}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
