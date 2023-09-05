import logo from "../../assets/images/logo.png";
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={ logo } alt="AppFood" height={198}/>

                <div className="page-details">
                    <h1>Campus Cascavel</h1>
                </div>

            </Content>
        </Container>
    );
}