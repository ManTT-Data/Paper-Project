import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/LoginPage";
import SignUp from "../Pages/SignUpPage";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
