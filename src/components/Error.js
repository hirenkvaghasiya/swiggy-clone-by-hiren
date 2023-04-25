import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.error(err);

    return (
        <main className="main__content container">
            <br />
            <h1>{err.status} - Page Not Found!</h1>
            <h3>Go Back to Home</h3>
        </main>
    )
}

export default Error