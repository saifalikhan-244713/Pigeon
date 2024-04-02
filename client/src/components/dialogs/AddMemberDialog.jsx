// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   Skeleton,
//   Stack,
//   Typography,
// } from "@mui/material";
// import  { useState } from "react";
// import { sampleUsers } from "../../constants/sampleData";
// import UserItem from "../shared/UserItem";
// import {
//   useAddGroupMembersMutation,
//   useAvailableFriendsQuery,
// } from "../../redux/api/api";
// import { useAsyncMutation, useErrors } from "../../hooks/hook";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsAddMember } from "../../redux/reducers/misc";

import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useState } from "react";

//   const { isAddMember } = useSelector((state) => state.misc);

//   const { isLoading, data, isError, error } = useAvailableFriendsQuery(chatId);

//   const [addMembers, isLoadingAddMembers] = useAsyncMutation(
//     useAddGroupMembersMutation
//   );

//   const [selectedMembers, setSelectedMembers] = useState([]);

//   const closeHandler = () => {
//     dispatch(setIsAddMember(false));
//   };

//   useErrors([{ isError, error }]);
//   return (
//     <Dialog open={isAddMember} onClose={closeHandler}>
//       <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
//         <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

//         <Stack spacing={"1rem"}>
//           {isLoading ? (
//             <Skeleton />
//           ) : data?.friends?.length > 0 ? (
//             data?.friends?.map((i) => (
//               <UserItem
//                 key={i._id}
//                 user={i}
//                 handler={selectMemberHandler}
//                 isAdded={selectedMembers.includes(i._id)}
//               />
//             ))
//           ) : (
//             <Typography textAlign={"center"}>No Friends</Typography>
//           )}
//         </Stack>

//         <Stack
//           direction={"row"}
//           alignItems={"center"}
//           justifyContent={"space-evenly"}
//         >
//           <Button color="error" onClick={closeHandler}>
//             Cancel
//           </Button>
//           <Button
//             onClick={addMemberSubmitHandler}
//             variant="contained"
//             disabled={isLoadingAddMembers}
//           >
//             Submit Changes
//           </Button>
//         </Stack>
//       </Stack>
//     </Dialog>
//   );
// };

// export default AddMember Dialog;

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  // const dispatch = useDispatch();
  // const [addMembers, isLoadingAddMembers] = useAsyncMutation(
  //   useAddGroupMembersMutation
  // );
  // const [] = useState();

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const addMemberSubmitHandler = () => {
    // addMembers("Adding Members...", { members: selectedMembers, chatId });
    closeHandler();
  };

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
    // dispatch(setIsAddMember(false));
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem
                key={i.id}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button
            onClick={addMemberSubmitHandler}
            variant="contained"
            disabled={isLoadingAddMember}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
