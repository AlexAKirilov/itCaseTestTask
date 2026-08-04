import React, {FC} from "react";
import cn from 'classnames';
import './cart-list.css'
import {Text} from "@/shared/ui/text";
import {CartItem} from "@/entities/cart/ui/cart-item/cart-item";
import {CartItemKey} from "@/entities/cart/model/types";
import {useCart} from "@/entities/cart/hooks/use-cart";
import {Loader} from "@/shared/ui/loader/ui/loader";

export const CartList: FC = () => {
    const { items, isLoading, total, updateQuantity, removeItem } = useCart()

    if (isLoading) return <Loader />

    if (items.length === 0) {
        return <Text typo={"primary_md"}>Корзина пуста</Text>
    }

    const handleUpdateQuantity = (key: CartItemKey, quantity: number) => {
        updateQuantity(key, quantity)
    }

    const handleRemove = (key: CartItemKey) => {
        removeItem(key)
    }

    return (
        <section className={cn('cart__list', 'section')}>
            <div className={'cart__list-items'}>
                {items.map((item) => (
                    <CartItem
                        key={`${item.product_id}-${item.color_id}-${item.size_id}`}
                        item={item}
                        on_update_quantity={handleUpdateQuantity}
                        on_remove={handleRemove}
                    />
                ))}
            </div>
            <div className={'cart__list-total'}>
                <Text typo={"primary_lg"} align={"right"}>
                    Итого: {total.toFixed(2)}
                </Text>
            </div>
        </section>
    )
}
