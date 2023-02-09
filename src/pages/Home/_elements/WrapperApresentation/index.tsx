import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import * as S from "./styles"

import coffeDelivery from '../../../../assets/coffe.svg'

export const WrapperApresentation = () => {
    return (
        <S.WrapperApresentation>
            <div>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <span className='subtitle'>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </span>

                <div className='datails'>
                    <span>
                        <ShoppingCart size={35} weight="fill" className='icon cart' />
                        Compra simples e segura
                    </span>
                    <span>
                        <Package size={35} weight="fill" className='icon package' />
                        Embalagem mantém o café intacto
                    </span>
                    <span>
                        <Timer size={35} weight="fill" className='icon timer' />
                        Entrega rápida e rastreada
                    </span>
                    <span>
                        <Coffee size={35} weight="fill" className='icon coffee' />
                        O café chega fresquinho até você
                    </span>
                </div>
            </div>
            <div>
                <img src={coffeDelivery} alt="" />
            </div>
        </S.WrapperApresentation>
    )
}