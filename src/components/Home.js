import { Alert, Container } from "react-bootstrap";

export function Home() {
    return(
        <>
            <Container className="mt-5 text-center">
                <Alert>Welcome to Employee management system</Alert>
                <p>You can perform CRUD operation on Employee</p>
            </Container>
        </>
    );
}