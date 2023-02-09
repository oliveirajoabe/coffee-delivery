import * as S from "./styles"

interface Props {
    title: string
}

export const Tag = ({ title }: Props) => {
    return (
        <S.ContainerTag>
            <span>
                {title}
            </span>
        </S.ContainerTag>
    )
}