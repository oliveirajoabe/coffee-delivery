import { ShoppingCart } from 'phosphor-react'
import { InputWithButtons } from '../InputWithButtons'

import * as S from "./styles"

import { Tag } from './_elements/Tag'

interface Props {
    titleCard: string
    subtitle: string
    valueMoney: string
    tagArea: string[]
    img: string
    handleClick: () => void
    initialValue: string
    id: number
}

export const CardItem = ({ titleCard, subtitle, valueMoney, tagArea, img, handleClick, initialValue, id }: Props) => {
    return (
        <S.ShapeCardItem>
            <S.ImageArea>
                <img src={img} alt="" />
            </S.ImageArea>

            <S.TagArea>
                {tagArea.map((item) => (
                    <Tag key={item} title={item} />
                ))}
            </S.TagArea>

            <h3>{titleCard}</h3>
            <span>{subtitle}</span>

            <S.WrapperValue>
                <div>
                    <span>R$ <strong>{valueMoney}</strong></span>
                </div>
                <InputWithButtons initialValue={initialValue} id={id} />
                <S.ButtonAddToCart type='button' onClick={handleClick}>
                    <ShoppingCart size={22} weight="fill" className='cart' />
                </S.ButtonAddToCart>
            </S.WrapperValue>
        </S.ShapeCardItem>
    )
}