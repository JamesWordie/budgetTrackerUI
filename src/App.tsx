import { Button, Container, Divider, Typography } from "@mui/material";
import { IUserRequest } from "exports/types.exports";
import { Fragment, useEffect, useState } from "react";
import {
  useCreateANewUserMutation,
  useCreateASessionMutation,
} from "./services/exports.services";
import Routing from "./routing";

const App = () => {
  const [userData, setUserData] = useState<IUserRequest>({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });
  const [createNewUser, { data, error, isSuccess, isError }] =
    useCreateANewUserMutation();
  const [
    newSession,
    {
      data: newData,
      isSuccess: isNewSuccess,
      error: newError,
      isError: isNewError,
    },
  ] = useCreateASessionMutation();

  useEffect(() => {
    isSuccess && console.log(data);
    isError && console.log(error);
    isNewSuccess && console.log(newData);
    isNewError && console.log(newError);
  }, [isSuccess, isError, isNewError, isNewSuccess]);

  return (
    // <Container
    //   maxWidth="lg"
    //   style={{
    //     minHeight: "20rem",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "white",
    //   }}
    // >
    //   <Button
    //     style={{ backgroundColor: "black", color: "white" }}
    //     onClick={() =>
    //       createNewUser({
    //         firstname: "James",
    //         surname: "Wordie",
    //         email: "james.wordie@livetest3.com",
    //         password: "Secret123",
    //       })
    //     }
    //   >
    //     Register
    //   </Button>
    //   <Divider></Divider>
    //   {error && "data" in error && (
    //     <Typography variant="h3">{error.data.msg ?? null}</Typography>
    //   )}
    //   <Divider></Divider>
    //   <Button
    //     style={{ backgroundColor: "black", color: "white" }}
    //     onClick={() =>
    //       newSession({
    //         email: "james.wordie@livetest2.com",
    //         password: "Secret123",
    //       })
    //     }
    //   >
    //     Login
    //   </Button>
    // </Container>
    <Fragment>
      <Routing />
    </Fragment>
  );
};

export default App;
