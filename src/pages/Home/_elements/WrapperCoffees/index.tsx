import { CardItem } from "../../../../components/CardItem"

import * as S from "./styles"
import { valuesCoffees } from "./valuesCoffee"





export const WrapperCoffees = () => {
    return (
        <S.WrapperCoffeesStyles>
            <h2>Nossos cafés</h2>

            <div className="values">
                {valuesCoffees.map((item) => (
                    <CardItem
                        key={item.id}
                        titleCard={item.titleCard}
                        subtitle={item.subtitle}
                        valueMoney={item.valueMoney}
                        tagArea={item.tagArea}
                        img={item.img}
                    />
                ))}
            </div>
        </S.WrapperCoffeesStyles>
    )
}

