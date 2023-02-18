import { CurrencyDollar, MapPinLine, Trash } from "phosphor-react";
import { useContext } from "react";
import { InputWithButtons } from "../../components/InputWithButtons";
import ShapeContent from "../../components/ShapeContent";
import { CartContext } from "../../context/CartContext";

import * as S from "./styles"

export default function Checkout() {
    const { itemCheckout } = useContext(CartContext)

    return (
        <ShapeContent>
            <form >
                {!!itemCheckout.length &&
                    <S.WrapperCheckout>
                        <S.WrapperPaymentAddress>
                            <div className="shapeAddress">
                                <S.Title>
                                    Complete seu pedido
                                </S.Title>
                                <div className="shape">
                                    <div className="wrapper__header">
                                        <MapPinLine size={20} className="icon" />
                                        <div className="wrapper__texts">
                                            <S.TitleShape>Endereço de Entrega</S.TitleShape>
                                            <S.SubtitleShape>Informe o endereço onde deseja receber seu pedido</S.SubtitleShape>
                                        </div>
                                    </div>
                                    <div className="wrapper__fields">
                                        <S.InputStyles type="text" placeholder="CEP" className="cep" />
                                        <S.InputStyles type="text" placeholder="Rua" className="addressName" />
                                        <div className="wrapper__number">
                                            <S.InputStyles type="text" placeholder="Número" className="number" />
                                            <S.InputStyles type="text" placeholder="Complemento" className="complement" />
                                        </div>
                                        <div className="wrapper__neighborhood">
                                            <S.InputStyles type="text" placeholder="Bairro" className="neighborhood" />
                                            <S.InputStyles type="text" placeholder="Cidade" className="city" />
                                            <S.InputStyles type="text" placeholder="UF" className="uf" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shapePayment">
                                <div className="wrapper_header">
                                    <CurrencyDollar size={20} className="icon" />
                                    <div className="texts">
                                        <S.TitleShape>Pagamento</S.TitleShape>
                                        <S.SubtitleShape>O pagamento é feito na entrega. Escolha a forma que deseja pagar</S.SubtitleShape>
                                    </div>
                                </div>
                            </div>
                        </S.WrapperPaymentAddress>

                        <div>
                            <S.Title>
                                Cafés selecionados
                            </S.Title>
                            <S.ShapeItems>
                                {itemCheckout.map(item => (
                                    <div key={item.id} className="items">
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div>
                                            <span>{item.titleCard}</span>

                                            <div className="buttons">
                                                <InputWithButtons
                                                    id={item.id}
                                                    initialValueQuantity={item.quantity}
                                                />
                                                <div>
                                                    <S.ButtonRemove type="button">
                                                        <Trash size={20} className="icon" />
                                                        <span>
                                                            remover
                                                        </span>
                                                    </S.ButtonRemove>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <S.ButtonSubmit type="submit">confirmar pedido</S.ButtonSubmit>
                                </div>
                            </S.ShapeItems>
                        </div>
                    </S.WrapperCheckout>
                }
            </form>
        </ShapeContent>
    )
}