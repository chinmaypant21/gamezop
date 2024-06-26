import Link from 'next/link';
// import '@/assets/header.css'

export default function NavItem({category, isActive}: any) {
    return (
        <li key={category} className={`nav_category ${isActive ? ' nav_category_active' : ''}`}>
            <Link href={`/${category.id}`}>
            {category.name}
            </Link>
        </li>
    )
}