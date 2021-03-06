import Home from "../pages/Home";
import User from "../pages/User";
import Users from "../pages/Users";
import Error404 from "../pages/Error404";

export default [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "/users",
    exact: true,
    page: Users,
  },
  {
    path: "/:id",
    exact: true,
    page: User,
  },
  {
    path: "*",
    exact: false,
    page: Error404,
  },
];
