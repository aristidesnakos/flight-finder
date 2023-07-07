import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Activation from './Activation';
import PasswordReset from './PasswordReset';
import PasswordResetConfirm from './PasswordResetConfirm';
import UserProfile from './UserProfile';

const HomePage = () => <div>Home Page</div>;
const SearchPage = () => <div>Search Page</div>;
const DetailsPage = () => <div>Details Page</div>;

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate/:uid/:token" element={<Activation />} />
      <Route path="/password/reset" element={<PasswordReset />} />
      <Route path="/password/reset/confirm/:uid/:token" element={<PasswordResetConfirm />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default AppRouter;