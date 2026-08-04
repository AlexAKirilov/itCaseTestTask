import React, {FC} from "react";
import cn from 'classnames';
import './cart-item.css'
import {Text} from "@/shared/ui/text";
import {Button} from "@/shared/ui/button";
import {CartItemDTO, CartItemKey} from "@/entities/cart/model/types";
import {cartService} from "@/entities/cart/lib/cart-service";

export interface CartItemProps {
    item: CartItemDTO
    on_update_quantity: (key: CartItemKey, quantity: number) => void
    on_remove: (key: CartItemKey) => void
}

export const CartItem: FC<CartItemProps> = props => {
    const { item, on_update_quantity, on_remove } = props
    const itemKey: CartItemKey = {
        product_id: item.product_id,
        color_id: item.color_id,
        size_id: item.size_id,
    }

    const lineTotal = cartService.getItemTotal(item)

    return (
        <div className={cn('cart__item')}>
            <img
                className={'cart__item-image'}
                src={require(`@/shared/assets${item.image}`)}
                alt={`${item.product_name} ${item.color_name}`}
            />
            <div className={'cart__item-info'}>
                <Text custom_classnames={'cart__item-brand'} typo={"primary_sm"} align={"left"}>
                    {item.brand}
                </Text>
                <Text custom_classnames={'cart__item-name'} typo={"primary_md"} align={"left"}>
                    {item.product_name}
                </Text>
                <Text typo={"primary_sm"} align={"left"}>
                    {item.color_name} · {item.size_name}
                </Text>
                <Text typo={"primary_sm"} align={"left"}>
                    {item.price} × {item.quantity} = {lineTotal.toFixed(2)}
                </Text>
            </div>
            <div className={'cart__item-actions'}>
                <div className={'cart__item-quantity'}>
                    <Button
                        custom_classnames={'cart__item-quantity-btn'}
                        on_click_action={() => on_update_quantity(itemKey, item.quantity - 1)}
                    >
                        −
                    </Button>
                    <Text typo={"primary_md"} align={"center"} custom_classnames={'cart__item-quantity-value'}>
                        {item.quantity}
                    </Text>
                    <Button
                        custom_classnames={'cart__item-quantity-btn'}
                        on_click_action={() => on_update_quantity(itemKey, item.quantity + 1)}
                    >
                        +
                    </Button>
                </div>
                <Button
                    custom_classnames={'cart__item-remove-btn'}
                    on_click_action={() => on_remove(itemKey)}
                >
                    удалить
                </Button>
            </div>
        </div>
    )
}
