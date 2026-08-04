import {useCallback, useEffect, useMemo, useState} from "react";
import {CartItemDTO, CartItemKey} from "@/entities/cart/model/types";
import {cartService} from "@/entities/cart/lib/cart-service";


export const useCart = () => {
    const [items, setItems] = useState<CartItemDTO[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const refresh = useCallback(() => {
        setItems(cartService.getItems())
    }, [])

    useEffect(() => {
        refresh()
        setIsLoading(false)

        const handleCartUpdated = () => refresh()
        window.addEventListener(cartService.CART_UPDATED_EVENT, handleCartUpdated)

        return () => {
            window.removeEventListener(cartService.CART_UPDATED_EVENT, handleCartUpdated)
        }
    }, [refresh])

    const addItem = useCallback((item: CartItemDTO) => {
        cartService.addItem(item)
        refresh()
    }, [refresh])

    const updateQuantity = useCallback((key: CartItemKey, quantity: number) => {
        cartService.updateQuantity(key, quantity)
        refresh()
    }, [refresh])

    const removeItem = useCallback((key: CartItemKey) => {
        cartService.removeItem(key)
        refresh()
    }, [refresh])

    const total = useMemo(() => cartService.getCartTotal(items), [items])
    const itemsQuantity = useMemo(() => cartService.getItemsQuantity(items), [items])

    return {
        items,
        isLoading,
        total,
        itemsQuantity,
        addItem,
        updateQuantity,
        removeItem,
    }
}
