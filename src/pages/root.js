import { Site } from "components/site";
import { Outlet } from "react-router-dom";

export default function Root() {
    return Site(<Outlet />);
}
