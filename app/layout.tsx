import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PeraOS — İnşaat & Proje Yönetim Platformu",
  description:
    "Projelerinizi blok ve kat bazlı takip edin, şantiye süreçlerini dijitalleştirin, ekibinizle gerçek zamanlı koordinasyon sağlayın.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
