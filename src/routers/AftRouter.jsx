import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "../Components/ui/navBar/NavBar";
import { Screen } from "../pages/common/Screen";
import { LoginScreen } from "../pages/login/LoginScreen";

export const AftRouter = () => (
  <Router>
    <NavBar />

    <Routes>
      <Route path="/" element={<Screen type="home" />} />

      <Route path="/books" element={<Screen type="books" />} />
      <Route
        path="/characters/book/:bookId"
        element={<Screen type="characters" />}
      />
      <Route path="/scenes/book/:bookId" element={<Screen type="scenes" />} />

      <Route path="/works" element={<Screen type="works" />} />

      <Route path="/login" element={<LoginScreen />} />
      <Route path="/users" element={<Screen type="users" />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
