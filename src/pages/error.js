import { useRouteError } from "react-router-dom";

import "common";

import { Site } from "components/site";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    const content = (
        <>
            <h1>404 - Not found!</h1>
            <p>Sorry, the requested URL was not found.</p>
        </>
    );

    return Site(content);
}
