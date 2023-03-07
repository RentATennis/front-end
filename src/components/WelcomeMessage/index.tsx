import StyledImage from './styles'
import EncontreSeuEstilo from '../../assets/EncontreSeuEstilo.png'

const WelcomeMessage = () => {
    return (
        <StyledImage
            src={EncontreSeuEstilo}
            alt='Encontre seu estilo'
        />
    )
}

export default WelcomeMessage