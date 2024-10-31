import { Link } from 'react-router-dom'
import noMach from '../../resorses/img/404.png'

export const Page404 = () => {
    return (
        <Link to='/dashbord' >
            <img src={noMach} style={{ 'display': 'block', 'margin': '0 auto' }} alt="404 img" />
        </Link>
    )
}