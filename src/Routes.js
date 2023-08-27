import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MatchDetails from "./MatchDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <MatchDetails />,
  },
]);
