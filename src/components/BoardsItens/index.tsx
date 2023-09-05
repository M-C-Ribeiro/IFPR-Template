import { Container, Board } from "./styles"

interface OrdersBoardProps {
    icon: string;
    title: string;
    content: string;
}


export function BoardsContainer({icon, title, content}:OrdersBoardProps ) {
    return (
        <>
            <Board>
                <header>
                    <span>{ icon }</span>
                    <strong>{ title }</strong>
                </header>
                <Container>
                    <button type="button">
                        <strong> {content} </strong>
                    </button>                    
                </Container>
            </Board>
            </>     
    )
}                