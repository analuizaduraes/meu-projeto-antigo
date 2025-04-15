import { Container } from "../ButtonText/styles.js";

export function ButtonText({ icon: Icon, title, ...rest}){
    return(
        <Container type='button' {... rest}>
            {Icon && <Icon className="custom-icon" />}
            {title}
        </Container>
    )
}