import { useContext } from "react"
import { CardItem } from "../../../../components/CardItem"
import { CartContext } from "../../../../context/CartContext"

import * as S from "./styles"
import { valuesCoffees } from "./valuesCoffee"

export interface ItemCart {
    id: number
    titleCard: string
    subtitle: string
    valueMoney: string
    img: string
    tagArea: string[]
    quantity: string
}

export const WrapperCoffees = () => {
    const { item: coffees, handleAddItemToCheckout } = useContext(CartContext)

    const handleAddToCart = (e: ItemCart) => {
        // console.log(e);
        handleAddItemToCheckout(e)
    }

    return (
        <S.WrapperCoffeesStyles>
            <h2>Nossos cafés</h2>

            <div className="values">
                {coffees.map((item) => (
                    <CardItem
                        key={item.id}
                        titleCard={item.titleCard}
                        subtitle={item.subtitle}
                        valueMoney={item.valueMoney}
                        tagArea={item.tagArea}
                        img={item.img}
                        handleClick={() => handleAddToCart(item)}
                        initialValue={item.quantity}
                        id={item.id}
                    />
                ))}
            </div>
        </S.WrapperCoffeesStyles>
    )
}

