import "./App.css";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, [dispatch]);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={user ? <Homepage /> : <Navigate to="/authenticate" />}
            />
            <Route path="/authenticate" element={<Authenticate />} />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/authenticate" />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
