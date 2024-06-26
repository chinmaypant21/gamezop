'use client'

import { useParams } from "next/navigation";
import NavItem from "./NavItem";

const categories = [
    {
        name: 'Action',
        id: 'action-games'
    },
    {
        name: 'Adventure',
        id: 'adventure-games'
    },
    {
        name: 'Arcade',
        id: 'arcade-games'
    },
    {
        name: 'Puzzle & Logic',
        id: 'puzle-and-logic-games'
    },
    {
        name: 'Strategy',
        id: 'strategy-games'
    }
]


function NavCategory() {
    const { category: selected_category } = useParams();

    return (
        <ul id='category_container'>
            {
                categories.map((category: any) => (
                    <NavItem
                        key={category.id}
                        category={category}
                        isActive={category.id === selected_category}
                    />
                ))
            }
        </ul>
    )
}

export default NavCategory