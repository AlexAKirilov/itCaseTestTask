import {storageService} from "@/shared/lib/local-storage/storage-service";
import {CartItemDTO, CartItemKey} from "@/entities/cart/model/types";

const CART_STORAGE_KEY = 'cart'
const CART_UPDATED_EVENT = 'cart-updated'

const getItemKey = (item: CartItemKey) =>
    `${item.product_id}-${item.color_id}-${item.size_id}`

const getItems = (): CartItemDTO[] => {
    return storageService.get(CART_STORAGE_KEY) ?? []
}

const saveItems = (items: CartItemDTO[]) => {
    storageService.set(CART_STORAGE_KEY, items)
    window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT))
}

export const cartService = {
    CART_UPDATED_EVENT,
    getItems,

    addItem(item: CartItemDTO) {
        const items = getItems()
        const key = getItemKey(item)
        const existingIndex = items.findIndex(i => getItemKey(i) === key)

        if (existingIndex >= 0) {
            items[existingIndex].quantity += item.quantity
        } else {
            items.push(item)
        }

        saveItems(items)
    },

    updateQuantity(key: CartItemKey, quantity: number) {
        const items = getItems()
        const itemIndex = items.findIndex(i => getItemKey(i) === getItemKey(key))

        if (itemIndex < 0) return

        if (quantity <= 0) {
            items.splice(itemIndex, 1)
        } else {
            items[itemIndex].quantity = quantity
        }

        saveItems(items)
    },

    removeItem(key: CartItemKey) {
        const items = getItems().filter(i => getItemKey(i) !== getItemKey(key))
        saveItems(items)
    },

    getItemTotal(item: CartItemDTO): number {
        return (parseFloat(item.price) || 0) * item.quantity
    },

    getCartTotal(items: CartItemDTO[]): number {
        return items.reduce((sum, item) => sum + cartService.getItemTotal(item), 0)
    },

    getItemsQuantity(items: CartItemDTO[]): number {
        return items.reduce((sum, item) => sum + item.quantity, 0)
    },
}
