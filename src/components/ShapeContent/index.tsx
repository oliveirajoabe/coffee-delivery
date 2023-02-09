import { ReactNode } from "react"
import * as S from "./styles"

interface Props {
    children: ReactNode
}

const ShapeContent = ({ children }: Props) => {
    return (
        <S.ShapeContentStyles>
            {children}
        </S.ShapeContentStyles>
    )
}

export default ShapeContent