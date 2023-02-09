import { useState } from 'react'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import * as S from "./styles"

import itemCoffee from "../../assets/item-coffee.png"
import { Tag } from './_elements/Tag'

interface Props {
    titleCard: string
    subtitle: string
    valueMoney: string
    tagArea: string[]
    img: string
}

export const CardItem = ({ titleCard, subtitle, valueMoney, tagArea, img }: Props) => {
    const [inputNumber, setInputNumber] = useState("0")

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
                <S.WrapperInputAddQuantity>
                    <Minus size={20} weight="fill" className='icon' onClick={() => setInputNumber(state => Number(state) <= 0 ? "0" : String(Number(state) - 1))} />
                    <S.InputStyles type="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
                    <Plus size={20} weight="fill" className='icon' onClick={() => setInputNumber(state => String(Number(state) + 1))} />
                </S.WrapperInputAddQuantity>
                <S.ButtonAddToCart>
                    <ShoppingCart size={22} weight="fill" className='cart' />
                </S.ButtonAddToCart>
            </S.WrapperValue>
        </S.ShapeCardItem>
    )
}