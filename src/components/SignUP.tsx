import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

import { Form } from "./Form";
import { useAppDispatch } from "../hooks/redux-hooks";

const SignUp = () => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegister = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div>
      <Form title="register" handleClick={handleRegister} />
    </div>
  );
};

export { SignUp };
