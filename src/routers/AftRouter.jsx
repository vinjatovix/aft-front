import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "../Components/ui/navBar/NavBar";
import { Screen } from "../pages/common/Screen";
import { HomeScreen } from "../pages/home/HomeScreen";
import { LoginScreen } from "../pages/login/LoginScreen";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AftRouter = () => (
  <Router>
    <NavBar />

    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomeScreen />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }
      />

      <Route
        path="/books"
        element={
          <PrivateRoute>
            <Screen type="book" />
          </PrivateRoute>
        }
      />
      <Route
        path="/book/:bookId/characters"
        element={
          <PrivateRoute>
            <Screen type="character" />
          </PrivateRoute>
        }
      />
      <Route
        path="/book/:bookId/scenes"
        element={
          <PrivateRoute>
            <Screen type="scene" />
          </PrivateRoute>
        }
      />

      <Route path="/works" element={<Screen type="work" />} />

      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Screen type="user" />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);
