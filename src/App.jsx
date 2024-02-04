import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Leaderboard from "./pages/Leaderboard"
import Profile from "./pages/Profile"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ChatInterface from "./pages/ChatInterface"

function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat-interface" element={<ChatInterface />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
