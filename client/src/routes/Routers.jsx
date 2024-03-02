import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Search from "../pages/Search";
import MyProfile from "../pages/MyProfile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
};

export default Routers;
