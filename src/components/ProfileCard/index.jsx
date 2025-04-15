import { Container } from './styles.js';

export function ProfileCard({avatar: Avatar, title, ...rest}) {
    return(
        <Container {...rest}>
            {Avatar && <Avatar className="custom-icon"/>}
            {title}
        </Container>
    )
}
