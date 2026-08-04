export interface ProductColorDTO {
    id: number,
    name: string,
    hex: string,
    images: string[],
    price: string
    description: string
    // ID размеров
    sizes: number[]
}