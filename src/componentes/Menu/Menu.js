import Logo from '../../assets/img/Logo.png'
import Button from '../Button'
import './Menu.css'
//import ButtonLink from './componetes/ButtonLink/ButtonLink'

const Menu = () => {
    return(
        <nav className='Menu'>
          <a href="/">
             <img className='Logo' src={Logo} alt='Logo da pagina'/>
          </a>

          <Button className="ButtonLink" href="/" children="Novo vídeo" />
        </nav>
    )
}

export default Menu