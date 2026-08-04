import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cn from 'classnames'
import {ProductList} from "@/widgets/product-list/ui/product-list";
import {FilterPanel} from "@/widgets/filter-panel/ui/filter-panel";

export const CatalogPage: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const onlyInStock = searchParams.get("inStock") === "true";
    const sortBy = (searchParams.get("sort") as 'asc' | 'desc' | null) || null;

    const handleToggleInStock = () => {
        setSearchParams(prev => {
            if (prev.get("inStock") !== "true") {
                prev.set("inStock", "true");
            } else {
                prev.delete("inStock");
            }
            return prev;
        });
    };

    const handleSortBy = (sort: 'asc' | 'desc' | null) => {
        setSearchParams(prev => {
            if (sort) {
                prev.set("sort", sort);
            } else {
                prev.delete("sort");
            }
            return prev;
        });
    };

    return (
        <>
            <title>Тестовое задание | Каталог</title>
            <FilterPanel 
                only_in_stock={onlyInStock} 
                on_toggle_in_stock={handleToggleInStock}
                sort_by={sortBy}
                on_sort_by={handleSortBy}
                search_query={searchQuery}
                on_search_query_change={setSearchQuery}
            />
            <ProductList only_in_stock={onlyInStock} sort_by={sortBy} search_query={searchQuery} />
        </>
    )
}