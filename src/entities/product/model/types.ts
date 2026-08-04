import {ProductColorDTO} from "../../color/types";

export interface ProductDTO {
    id: number,
    name: string,
    categoryId: number,
    brand: string,
    colors: ProductColorDTO[]
}
