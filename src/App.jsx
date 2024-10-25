import { Route, Routes } from "react-router-dom";
import UserAuth from "./pages/UserAuth";
import Home from "./pages/Home";
import UserVerifyOtp from "./pages/UserVerifyOtp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/verify/otp" element={<UserVerifyOtp />} />
      </Routes>
    </>
  );
}

export default App;
