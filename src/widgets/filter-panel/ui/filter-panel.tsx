import React, {FC} from "react";
import cn from 'classnames'
import './filter-panel.css'
import {Toggle} from "@/shared/ui/toggle-button/ui/toggle";
import {Button} from "@/shared/ui/button";
import {InputField} from "@/shared/ui/input-field";
import {Text} from "@/shared/ui/text";

export interface FilterPanelProps {
    onlyInStock: boolean;
    onToggleInStock: () => void;
    sortBy: 'asc' | 'desc' | null;
    onSortBy: (sort: 'asc' | 'desc' | null) => void;
    searchQuery: string;
    onSearchQueryChange: (query: string) => void;
}

export const FilterPanel: FC<FilterPanelProps> = ({ 
    onlyInStock, 
    onToggleInStock, 
    sortBy, 
    onSortBy,
    searchQuery,
    onSearchQueryChange
}) => {
    return (
        <div className={cn('filter__panel')}>
            <div className={cn('filter__left')}>
                <div className={cn('filter__sort')}>
                    <Button
                        onClickAction={() => onSortBy(sortBy === 'asc' ? null : 'asc')}
                        customClassnames={cn('filter__sort-btn', sortBy === 'asc' && 'active')}
                    >
                        <Text typo={"secondary_sbold"}>
                            {'сначала дешевле'}
                        </Text>
                    </Button>
                    <Button
                        onClickAction={() => onSortBy(sortBy === 'desc' ? null : 'desc')}
                        customClassnames={cn('filter__sort-btn', sortBy === 'desc' && 'active')}
                    >
                        <Text typo={"secondary_sbold"}>
                            {'сначала дороже'}
                        </Text>
                    </Button>
                </div>
                <Toggle text={'в наличии'} defaultState={onlyInStock} onClick={onToggleInStock} />
            </div>
            <InputField
                placeholder={'поиск'}
                value={searchQuery}
                onChange={onSearchQueryChange}
            />
        </div>
    )
}