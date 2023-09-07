import { createHashRouter } from "react-router-dom";
import App from "./App";
import MatchDetails from "./MatchDetails";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <MatchDetails />,
  },
  {
    path: "/:id/:filter",
    element: <MatchDetails />,
  },
]);
