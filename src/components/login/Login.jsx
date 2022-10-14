import { Container } from "react-bootstrap";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export default function Login() {
 return (
    <Container>
        <div className="login-container">
        <Heading content="Login" />
        <LoginForm />
    </div>
    </Container>
 );
}