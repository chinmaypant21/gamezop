'use client'

import Link from "next/link";
import { useParams } from "next/navigation";
import { categories } from "@/data/categories";
import styles from './Navbar.module.css'

function NavCategory() {
    const { category: selected_category } = useParams();

    return (
        <ul id={styles.category_container}>
            {
                categories.map((category: any) => {
                    const isActive = category.id === selected_category;

                    return (
                        <li 
                            key={category.id}
                            className={`
                                ${styles.nav_category} 
                                ${isActive ? `${styles.nav_category_active}` : ''}
                            `}
                        >
                            <Link href={`/${category.id}`}>
                                {category.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavCategory