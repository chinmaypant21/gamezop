import CategoryClient from "@/components/CategoryClient";
import styles from '@/assets/page.module.css'

export default async function CategoryPage() {
    // console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
    const response = await fetch('https://pub.gamezop.com/v3/games?id=peSLSV', {
        next: {revalidate: 10} //Revalidate data every 60 seconds to prevent unnecessary API calls (ISR)
    });
    const { games } = await response.json();

    return (
        <main className={`flex flex-col items-center justify-between py-4 ${styles.page_wrapper}`}>
            <CategoryClient games={games} />
        </main>
    );
}