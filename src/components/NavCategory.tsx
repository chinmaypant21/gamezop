'use client'

import { useParams } from "next/navigation";
import NavItem from "./NavItem";
import { categories } from "@/data/categories";

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