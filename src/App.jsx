import Home from "./pages/home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MentorForm from "./sections/mentorForm";
import StudentForm from "./sections/studentForm";
import Matches from "./sections/matches";
import LoginPage from "./sections/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor" element={<MentorForm />} />
          <Route path="/student" element={<StudentForm />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="matches/:name" element={<Matches />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
