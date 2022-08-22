import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
// import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

const HomePage = () => {
  const { isAuth, email } = useAuth();
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  return isAuth ? (
    <div>
      <h1>Welcone</h1>
      <button onClick={() => dispatch(removeUser())}>
        log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export default HomePage;
