import { Form } from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

const Login = () => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert("Invalid user!"));
  };

  return (
    <div>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  );
};
export { Login };
