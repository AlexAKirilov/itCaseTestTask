import React, {FC} from "react";
import cn from 'classnames';
import {NavLink} from "react-router-dom";
import './product-not-found.css'
import {Text} from "@/shared/ui/text";

export const ProductNotFound: FC = () => {
    return (
        <section className={cn('product-not-found', 'section')}>
            <Text typo={"primary_lg"} align={"center"}>
                Товар не найден
            </Text>
            <NavLink to="/catalogue" className={'product-not-found__link'}>
                <Text typo={"primary_md"} align={"center"}>
                    Вернуться в каталог
                </Text>
            </NavLink>
        </section>
    )
}
