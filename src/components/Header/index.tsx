import { useContext } from 'react'
import * as S from './styles'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import ShapeContent from '../ShapeContent'
import { CartContext } from '../../context/CartContext'

export default function Header() {
    const { itemCheckout } = useContext(CartContext)

    return (
        <ShapeContent>
            <S.HeaderContainer>
                <nav>
                    <NavLink to='/' title='Home'>
                        <img src={logo} alt="logo coffee delivery" />
                    </NavLink>
                    <div className='wrapper__location-checkout'>
                        <S.BoxLocation>
                            <MapPin size={24} weight="fill" className='pin' />
                            <span>
                                Porto Alegre, RS
                            </span>
                        </S.BoxLocation>
                        <NavLink to="/checkout" title='Checkout' className='cart-link'>
                            <ShoppingCart size={30} weight="fill" className='cart' />
                            {!!itemCheckout.length && <S.TotalCart>{itemCheckout.length}</S.TotalCart>}
                        </NavLink>
                    </div>
                </nav>
            </S.HeaderContainer>
        </ShapeContent>
    )
}