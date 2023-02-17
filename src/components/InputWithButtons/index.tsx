import { Minus, Plus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import * as S from "./styles"

interface Props {
    initialValue: string
    id: number
}
export const InputWithButtons = ({ initialValue, id }: Props) => {
    const { handleItemCartAdd, handleItemCartRemove, handleInputAddItemWithInput } = useContext(CartContext)

    const handleAddItem = () => {
        handleItemCartAdd({ quantity: initialValue, id })
    }

    const handleRemoveItem = () => {
        handleItemCartRemove({ quantity: initialValue, id })
    }

    const handleInput = (e: any) => {
        const value = (e.target.value).replace(/\D/g, '')
        handleInputAddItemWithInput({ quantity: value, id })
    }

    return (
        <S.WrapperInputAddQuantity>
            <Minus
                size={20}
                weight="fill"
                className='icon'
                onClick={handleRemoveItem}
            />
            <S.InputStyles
                type="number"
                value={initialValue}
                onChange={handleInput} />
            <Plus
                size={20}
                weight="fill"
                className='icon'
                onClick={handleAddItem}
            />
        </S.WrapperInputAddQuantity>
    )
}