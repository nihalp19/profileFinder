import { Routes,Route } from "react-router-dom"
import Layout from "./pages/Layout"
import ProfileCard from "./components/ProfileCard"
import AdminPage from "./pages/AdminPage"
import AddProfile from "./components/AddProfile"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/profile/:id" element={<ProfileCard/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/admin/addprofile" element={<AddProfile/>}/>
    </Routes>
  )
}

export default App
