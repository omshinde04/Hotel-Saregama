"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}

            {!loading && (
                <>
                    <Navbar />
                    {children}
                    <Footer />
                    {/* ✅ FLOATING WHATSAPP */}
                    <WhatsAppFloat />
                </>
            )}
        </>
    );
}