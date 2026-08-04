export interface ErrorDTO {
    /*
    Создал DTO на случай, если магазин разрастется,
    и у ошибки появятся другие поля
    (например, timestamp или id)
    */
    message: string
}