import { HeaderArea } from './styled'
import { Link } from 'react-router-dom'

import { isLogged } from '../../../helpers/AuthHandler'

const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>

        <nav>
          <ul>
            {isLogged() ? (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>

                <li>
                  <Link to="/logout">Sair</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>

                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
              </>
            )}

            <li>
              <Link to={`${isLogged() ? '/post-ad' : '/singin'}`} className="button">
                Anuncie já!
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header
