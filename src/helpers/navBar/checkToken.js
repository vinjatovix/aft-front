import { decodeToken, isExpired } from "react-jwt";

export function checkToken(token, setAuth) {
  if (token) {
    const isMyTokenExpired = isExpired(token);
    if (!isMyTokenExpired) {
      const jwt = decodeToken(token);
      setAuth({ token, user: { username: jwt.username, roles: jwt.roles } });
    } else {
      localStorage.removeItem("token");
      setAuth({});
    }
  }
}
