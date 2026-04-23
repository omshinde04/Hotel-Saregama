import Image from "next/image";

export const metadata = {
    title:
        "Privacy Policy – Saregama Family Restaurant & Bar, Ghoti Nashik Highway",

    description:
        "Privacy Policy of Saregama Family Restaurant & Bar, Ghoti Nashik. Learn how we collect, use, and protect your data when visiting our restaurant on the Mumbai–Nashik Expressway.",

    keywords: [
        "Saregama restaurant privacy policy",
        "restaurant Ghoti Nashik highway",
        "Mumbai Nashik highway restaurant",
        "family restaurant Nashik privacy policy",
        "bar near Igatpuri Nashik",
        "Saregama restaurant Ghoti",
        "highway food stop Nashik",
        "restaurant data privacy India",
    ],

    metadataBase: new URL("https://hotelsaregama.in"),

    alternates: {
        canonical: "/privacy-policy",
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
            "Privacy Policy – Saregama Family Restaurant & Bar | Ghoti Nashik",
        description:
            "Understand how Saregama Restaurant protects your personal data. Located on Mumbai–Nashik Expressway, Ghoti.",
        url: "https://hotelsaregama.in/privacy-policy",
        siteName: "Saregama Restaurant",
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Privacy Policy – Saregama Family Restaurant & Bar Nashik",
        description:
            "Read how your data is handled at Saregama Restaurant, Ghoti Nashik.",
    },
};
export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-ink text-cream">

            {/* TOP SPACING (fix navbar overlap) */}
            <div className="pt-28 pb-16 px-6 md:px-10 max-w-4xl mx-auto">


                {/* TITLE */}
                <h1 className="text-h2 font-display text-gold mb-6">
                    Privacy Policy
                </h1>

                <p className="text-muted text-sm mb-10">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>

                {/* CONTENT */}
                <div className="space-y-8 text-sm leading-relaxed text-cream/80">

                    {/* INTRO */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">1. Introduction</h2>
                        <p>
                            Saregama Family Restaurant & Bar ("we", "our", "us") respects your
                            privacy and is committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use, and safeguard your
                            data when you visit our website or contact us.
                        </p>
                    </section>

                    {/* INFO */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            2. Information We Collect
                        </h2>
                        <p>
                            We may collect basic information such as your name, phone number,
                            and message when you contact us via forms, WhatsApp, or phone.
                        </p>
                    </section>

                    {/* USE */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            3. How We Use Your Information
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-cream/70">
                            <li>To respond to inquiries and reservations</li>
                            <li>To improve our services and customer experience</li>
                            <li>To communicate important updates</li>
                        </ul>
                    </section>

                    {/* SHARING */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            4. Data Sharing & Security
                        </h2>
                        <p>
                            We do not sell or share your personal data with third parties. Your
                            information is kept secure and used only for business communication.
                        </p>
                    </section>

                    {/* COOKIES */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">
                            5. Cookies & Tracking
                        </h2>
                        <p>
                            Our website may use basic cookies to improve user experience and
                            analyze traffic. No sensitive personal data is stored via cookies.
                        </p>
                    </section>

                    {/* RIGHTS */}
                    <section>
                        <h2 className="text-gold font-semibold mb-2">6. Your Rights</h2>
                        <p>
                            You may request to update or delete your personal information by
                            contacting us directly.
                        </p>
                    </section>

                    {/* CONTACT */}
                    <section>
                        <h2 className="text-gold font-semibold mb-3">7. Contact Us</h2>

                        <div className="space-y-2 text-cream/70">
                            <p>
                                📍 Mumbai–Nashik Expressway, Ghoti, Nashik – 422402, Maharashtra
                            </p>
                            <p>
                                📞 <a href="tel:+919403444438" className="text-gold">+91 9403444438</a>
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