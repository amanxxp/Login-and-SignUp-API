import React from "react";
import LoginCard from "../components/LoginCard.jsx";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom.js";
import SignupCard from "../components/SignupCard.jsx";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log(authScreenState);
  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
