import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "../helpers/navBar/NavBar";
import { BooksScreen } from "../pages/books/BooksScreen";
import { CharactersScreen } from "../pages/characters/CharactersScreen";
import { HomeScreen } from "../pages/home/HomeScreen";
import { LoginScreen } from "../pages/login/LoginScreen";
import { UsersScreen } from "../pages/users/UsersScreen";
import { WorksScreen } from "../pages/works/WorksScreen";

export const AftRouter = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/books" element={<BooksScreen />} />
      <Route path="/characters/book/:bookId" element={<CharactersScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/users" element={<UsersScreen />} />
      <Route path="/works" element={<WorksScreen />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
