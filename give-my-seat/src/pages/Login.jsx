import styled from "styled-components";
import logo from "../assets/logo_with_text.svg";
import googleLogo from "../assets/google.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../fConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 280px;
  height: 52px;
  border-radius: 50px;
  background-color: #30a2ff29;
  border: 1px solid transparent;
  padding-left: 34px;
`;

const LoginBtn = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  width: 280px;
  height: 52px;
  border-radius: 50px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 18px;
`;

const ToggleBtn = styled.div`
  background-color: black;
  color: #fff;
  width: 280px;
  height: 52px;
  border-radius: 50px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleLoginBtn = styled(ToggleBtn)`
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  position: relative;
  img {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Logo = styled.h1`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 120px;
`;

const Login = () => {
  function GoogleLogin() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: "user@google.com",
    });
    auth.languageCode = "ko";
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        console.log(credential);
        navigate("/main");
        //  성공시
      })
      .catch((error) => {
        console.log(error);
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // const email = error.customData.email;

        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const navigate = useNavigate();
  const [btnToggle, setBtnToggle] = useState(false);

  const [LoginState, setLoginState] = useState(false);
  const [inputs, set_inputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  function onChange(e) {
    const { name, value } = e.target;
    set_inputs({
      ...inputs,
      [name]: value,
    });
  }
  const submit = async (e) => {
    if (email !== "" && password !== "") {
      e.preventDefault();
      try {
        let data;
        if (btnToggle) {
          data = await createUserWithEmailAndPassword(auth, email, password);
        } else {
          data = await signInWithEmailAndPassword(auth, email, password);
        }
        navigate("/main");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("이메일과 패스워드를 입력해주세요");
    }
  };
  return (
    <Body>
      <Logo></Logo>
      <Form action="" onSubmit={submit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <ToggleBtn onClick={() => setBtnToggle(!btnToggle)}>
          {btnToggle ? "로그인 할래요" : "회원가입 할래요"}
        </ToggleBtn>
        {btnToggle ? <LoginBtn>SignUp</LoginBtn> : <LoginBtn>Login</LoginBtn>}
        <GoogleLoginBtn onClick={GoogleLogin}>
          <img src={googleLogo} alt="" />
          Login with Google
        </GoogleLoginBtn>
      </Form>
    </Body>
  );
};

export default Login;
