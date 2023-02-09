import * as S from './styles'

import ShapeContent from '../../components/ShapeContent'
import { WrapperApresentation } from './_elements/WrapperApresentation'
import { WrapperCoffees } from './_elements/WrapperCoffees'

export function Home() {
    return (
        <S.HomeContainer>
            <ShapeContent>
                <WrapperApresentation />
                <WrapperCoffees />
            </ShapeContent>
        </S.HomeContainer>
    )
}