import { useRouteError } from "react-router-dom";

import { Site } from "components/site";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    const content = (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );

    return Site(content);
}
