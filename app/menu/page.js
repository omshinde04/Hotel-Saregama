import MenuHero from "@/components/menu/MenuHero";
import MenuTabs from "@/components/menu/MenuTabs";

export const metadata = {
    title: "Full Menu | Saregama Restaurant Nashik",
    description:
        "Explore full menu of Saregama Family Restaurant including chicken starters, biryani, Indian main course, Chinese and more.",
};

export default function MenuPage() {
    return (
        <main className="bg-ink text-cream">
            <MenuHero />
            <MenuTabs />
        </main>
    );
}