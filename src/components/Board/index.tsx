import { Container } from "./styles";
import { BoardsContainer } from "../BoardsItens/index";

export function Orders() {    
    return (
        <Container>    
            <BoardsContainer
             icon="📰" 
             title="Notícias" 
             content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ducimus."/>
            <BoardsContainer 
            icon="💡" 
            title="Informações" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, rerum?"/>
            <BoardsContainer 
            icon="📖" 
            title="Matérias" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, quis!"/>
            <BoardsContainer 
            icon="➕" 
            title="Feed" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, sequi?"/>
        </Container>
    )
}