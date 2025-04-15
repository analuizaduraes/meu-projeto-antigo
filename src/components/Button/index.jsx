import { Container } from './styles.js';

export function Button({ icon: Icon, title, loading = false, ...rest }) {
    return (
        <Container type="button" disabled={loading} {...rest}>
            {Icon && <Icon className="custom-icon" />}
            {loading ? 'Carregando...' : title}
        </Container>
    )
}