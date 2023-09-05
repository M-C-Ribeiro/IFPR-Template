import { Container, Content } from "./styles";
import logoFace from "../../assets/images/logoFace.png"
import logoInsta from "../../assets/images/logoInsta.png"
import logoTwitter from "../../assets/images/logoTwitter.png"

export function Footer() {
    return (
        <Container>
            <Content>

                <div className="page-details">
                        <h1>Mateus Costa Ribeiro</h1>
                </div>
                <div className="logos">
                    <img src={logoFace} alt="Faceook" height={70}/>
                    <img src={logoInsta} alt="Instagram" height={70}/>
                    <img src={logoTwitter} alt="X" height={70}/>
                </div>

            </Content>
        </Container>
    );
}