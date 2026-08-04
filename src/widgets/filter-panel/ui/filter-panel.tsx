import React, {FC} from "react";
import cn from 'classnames'
import './filter-panel.css'
import {Toggle} from "@/shared/ui/toggle-button/ui/toggle";
import {Button} from "@/shared/ui/button";
import {InputField} from "@/shared/ui/input-field";
import {Text} from "@/shared/ui/text";

export interface FilterPanelProps {
    only_in_stock: boolean;
    on_toggle_in_stock: () => void;
    sort_by: 'asc' | 'desc' | null;
    on_sort_by: (sort: 'asc' | 'desc' | null) => void;
    search_query: string;
    on_search_query_change: (query: string) => void;
}

export const FilterPanel: FC<FilterPanelProps> = ({ 
    only_in_stock, 
    on_toggle_in_stock, 
    sort_by, 
    on_sort_by,
    search_query,
    on_search_query_change
}) => {
    return (
        <div className={cn('filter__panel')}>
            <div className={cn('filter__left')}>
                <div className={cn('filter__sort')}>
                    <Button
                        on_click_action={() => on_sort_by(sort_by === 'asc' ? null : 'asc')}
                        custom_classnames={cn('filter__sort-btn', sort_by === 'asc' && 'active')}
                    >
                        <Text typo={"secondary_sbold"}>
                            {'сначала дешевле'}
                        </Text>
                    </Button>
                    <Button
                        on_click_action={() => on_sort_by(sort_by === 'desc' ? null : 'desc')}
                        custom_classnames={cn('filter__sort-btn', sort_by === 'desc' && 'active')}
                    >
                        <Text typo={"secondary_sbold"}>
                            {'сначала дороже'}
                        </Text>
                    </Button>
                </div>
                <Toggle text={'в наличии'} default_state={only_in_stock} on_click={on_toggle_in_stock} />
            </div>
            <InputField
                placeholder={'поиск'}
                value={search_query}
                on_change={on_search_query_change}
            />
        </div>
    )
}
