// import { useInputValidation, useFileHandler } from "6pp";

// import {
//   Avatar,
//   Button,
//   Container,
//   Paper,
//   Stack,
//   TextField,
//   Typography,
//   IconButton,
// } from "@mui/material";

// // import { useState } from "react";
// // import CameraAltIcon from "@mui/icons-material/CameraAlt";
// // import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
// // import { usernameValidator } from "../utils/validators";
// import { bgGradient } from "../../c";

// const AdminLogin = () => {
//   // const name = useInputValidation("");
//   // const bio = useInputValidation("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("submit");
//     // dispatch(adminLogin(secretKey.value));
//   };

//   // const username = useInputValidation("", usernameValidator);
//   // const password = useInputValidation("");
//   return (
//     <div>
//       style=
//       {{
//         backgroundImage: bgGradient,
//       }}
//       <Container
//         component={"main"}
//         maxWidth="xs"
//         sx={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             padding: 4,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {
//             <>
//               <Typography variant="h5">Login</Typography>
//               <form
//                 style={{
//                   width: "100%",
//                   marginTop: "1rem",
//                 }}
//                 onSubmit={submitHandler}
//               >
//                 <TextField
//                   required
//                   fullWidth
//                   label="Username"
//                   margin="normal"
//                   variant="outlined"
//                   value={username.value}
//                   onChange={username.changeHandler}
//                 />

//                 <TextField
//                   required
//                   fullWidth
//                   label="Password"
//                   type="password"
//                   margin="normal"
//                   variant="outlined"
//                   value={password.value}
//                   onChange={password.changeHandler}
//                 />

//                 <Button
//                   sx={{
//                     marginTop: "1rem",
//                   }}
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   fullWidth
//                   // disabled={isLoading}
//                 >
//                   Login
//                 </Button>

//                 <Typography textAlign={"center"} m={"1rem"}>
//                   OR
//                 </Typography>

//                 <Button
//                   // disabled={isLoading}
//                   fullWidth
//                   variant="text"
//                   onClick={toggleLogin}
//                 >
//                   Sign Up Instead
//                 </Button>
//               </form>
//             </>
//           }
//         </Paper>
//       </Container>
//     </div>
//   );
// };

// export default AdminLogin;

import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
// import  { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { bgGradient } from "../../constants/color";
// import { adminLogin, getAdmin } from "../../redux/thunks/admin";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  // const { isAdmin } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    // dispatch(adminLogin(secretKey.value));
  };

  // useEffect(() => {
  //   dispatch(getAdmin());
  // }, [dispatch]);

  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />

            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
