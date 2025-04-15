import { Container } from "./styles";

export function Section({ title,  children }) {
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

//eu devo colocar a tag aqui ou na propria pagina Home? estou na duvida. creio que eles entram no "children"