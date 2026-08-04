import React, { FC } from "react";
import cn from "classnames";
import './header.css'
import {HeaderContent} from "@/widgets/header/config/header-content";
import {Text} from "@/shared/ui/text";
import {NavLink} from "react-router-dom";
import {useCart} from "@/entities/cart/hooks/use-cart";

export const Header: FC = () => {
    const { itemsQuantity, total } = useCart()

    return (
        <header className={cn('header', 'section')}>
            {
                HeaderContent.map((item, index) => (
                    <NavLink to={item.path} key={index}
                             className={({ isActive }) =>
                                 cn({
                                     active: isActive,
                                 })
                             }
                    >
                        <Text typo={"primary_lg"}>
                            {item.path === '/cart'
                                ? `${item.name} · ${itemsQuantity} · ${total.toFixed(2)}`
                                : item.name
                            }
                        </Text>
                    </NavLink>
                ))
            }
        </header>
    )
}