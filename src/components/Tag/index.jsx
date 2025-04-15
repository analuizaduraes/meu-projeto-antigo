import { Container } from './styles.js';

export function Tag({icon: Icon, title, ...rest }) {
  return (
    <Container {... rest}>
      {title}
      {Icon && <Icon className="custom-icon" />}
    </Container>
  )
}