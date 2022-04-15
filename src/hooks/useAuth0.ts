import { AuthService, useAuth } from "gatsby-theme-auth0";

export const useAuth0 = () => {
  const { isLoggedIn, profile } = useAuth();
  const { login, logout } = AuthService;
  console.log(isLoggedIn, profile, login, logout);
  return {
    login,
    logout,
    isAuthenticated: isLoggedIn,
    user: profile
  };
};
