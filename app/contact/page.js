import ContactHero from "@/components/contact/ContactHero";
import LocationSection from "@/components/contact/LocationSection";
import ContactCards from "@/components/contact/ContactCards";

export const metadata = {
    title: "Contact Saregama Restaurant | Ghoti Nashik Highway",
    description:
        "Contact Saregama Family Restaurant & Bar on Mumbai–Nashik Expressway, Ghoti. Call, WhatsApp, or get directions easily.",
};

export default function ContactPage() {
    return (
        <main className="bg-ink text-cream">
            <ContactHero />
            <ContactCards />
            <LocationSection />
        </main>
    );
}