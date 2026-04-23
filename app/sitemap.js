export default function sitemap() {
    const baseUrl = "https://hotelsaregama.in";

    const now = new Date();

    return [
        // 🔥 MAIN PAGES
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/menu`,
            lastModified: now,
            changeFrequency: "daily",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },

        // 🔥 SEO / TRUST PAGES (VERY IMPORTANT)
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/refund-policy`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.5,
        },

        // 🔥 EXTRA (OPTIONAL BUT POWERFUL)
        {
            url: `${baseUrl}/faq`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/offers`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.75,
        }
    ];
}