import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authSlice from "@redux/features/auth/slice";
import Loading from "@components/Loading";
import { Flex } from "antd";
import Wrapper from "@components/Wrapper";

function Logout() {
  const dispatch = useDispatch();
  const AuthActions = authSlice.actions;

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(AuthActions.logout());
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Flex
      align="center"
      justify="center"
      style={{ height: "100dvh", width: "100vw" }}
    >
      <Wrapper style={{ width: "fit-content", textAlign: "center" }}>
        <Loading />
        <br />
        See you again, Bye!
      </Wrapper>
    </Flex>
  );
}

export default Logout;
