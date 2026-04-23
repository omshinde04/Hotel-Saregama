import Image from "next/image";

export const metadata = {
    title:
        "Terms & Conditions – Saregama Family Restaurant & Bar, Ghoti Nashik Highway",

    description:
        "Read the Terms & Conditions of Saregama Family Restaurant & Bar, Ghoti Nashik. Learn about dining policies, reservations, and service guidelines on Mumbai–Nashik Expressway.",

    keywords: [
        "Saregama restaurant terms and conditions",
        "restaurant Ghoti Nashik policies",
        "Mumbai Nashik highway restaurant rules",
        "family restaurant Nashik terms",
        "bar near Igatpuri Nashik rules",
        "restaurant policies India dining",
    ],

    metadataBase: new URL("https://hotelsaregama.in"),

    alternates: {
        canonical: "/terms-conditions",
    },

    authors: [{ name: "Saregama Family Restaurant & Bar" }],
    creator: "Saregama Family Restaurant & Bar",
    publisher: "Saregama Family Restaurant & Bar",

    robots: {
        index: true,
        follow: true,
    },

    openGraph: {
        title:
            "Terms & Conditions – Saregama Family Restaurant & Bar | Ghoti Nashik",
        description:
            "Understand the terms, policies, and service guidelines of Saregama Restaurant on Mumbai–Nashik Expressway.",
        url: "https://hotelsaregama.in/terms-conditions",
        siteName: "Saregama Restaurant",
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Terms & Conditions – Saregama Family Restaurant Nashik",
        description:
            "Read the official terms and service policies of Saregama Restaurant, Ghoti Nashik.",
    },
};

export default function Terms() {
    return (
        <main className="min-h-screen bg-ink text-cream">

            {/* FIX NAVBAR OVERLAP */}
            <div className="pt-28 pb-16 px-6 md:px-10 max-w-4xl mx-auto">

                {/* TITLE */}
                <h1 className="text-h2 font-display text-gold mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-muted text-sm mb-10">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>

                {/* CONTENT */}
                <div className="space-y-8 text-sm leading-relaxed text-cream/80">

                    {/* INTRO */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By visiting or using the services of Saregama Family Restaurant &
                            Bar, located on the Mumbai–Nashik Expressway, Ghoti, Nashik, you
                            agree to comply with these Terms & Conditions.
                        </p>
                    </section>

                    {/* SERVICES */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            2. Services Offered
                        </h2>
                        <p>
                            We provide dining services, takeaway, and bar facilities. Menu
                            items, pricing, and availability may change without prior notice.
                        </p>
                    </section>

                    {/* RESERVATION */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            3. Reservations & Orders
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-cream/70">
                            <li>Reservations are subject to availability</li>
                            <li>Orders once placed may not be canceled after preparation</li>
                            <li>Group bookings should be confirmed in advance</li>
                        </ul>
                    </section>

                    {/* PAYMENT */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            4. Payments & Pricing
                        </h2>
                        <p>
                            All prices are in INR and inclusive/exclusive of applicable taxes
                            as per government regulations. We accept cash, card, and digital
                            payments.
                        </p>
                    </section>

                    {/* CONDUCT */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            5. Customer Conduct
                        </h2>
                        <p>
                            Guests are expected to behave respectfully. Any misconduct may
                            result in refusal of service.
                        </p>
                    </section>

                    {/* LIABILITY */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            We are not responsible for personal belongings lost or damaged
                            during your visit.
                        </p>
                    </section>

                    {/* CHANGES */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            7. Changes to Terms
                        </h2>
                        <p>
                            We reserve the right to update these Terms & Conditions at any
                            time without prior notice.
                        </p>
                    </section>

                    {/* CONTACT */}
                    <section>
                        <h2 className="text-gold font-semibold mb-3">
                            8. Contact Information
                        </h2>

                        <div className="space-y-2 text-cream/70">
                            <p>
                                📍 Mumbai–Nashik Expressway, Ghoti, Nashik – 422402, Maharashtra
                            </p>

                            <p>
                                📞{" "}
                                <a href="tel:+919403444438" className="text-gold">
                                    +91 9403444438
                                </a>
                            </p>

                            <p>
                                💬{" "}
                                <a
                                    href="https://wa.me/919403444438"
                                    target="_blank"
                                    className="text-gold"
                                >
                                    WhatsApp Us
                                </a>
                            </p>

                            <p>
                                📸{" "}
                                <a
                                    href="https://www.instagram.com/hotelsaregama_nsk?igsh=aWhqNjhhbDNoYzl3"
                                    target="_blank"
                                    className="text-gold"
                                >
                                    Instagram
                                </a>
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}