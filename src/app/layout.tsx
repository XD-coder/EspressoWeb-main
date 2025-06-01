import { Header } from '@/components/Header'; // Adjusted import path
import { Footer } from '@/components/Footer'; // Adjusted import path

import './../index.css'; // Adjusted import path for global styles

export const metadata = {
  title: 'Espresso Hosting',
  description: 'Your daily dose of reliable game server hosting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-dark-100 text-white">
          <div className="fixed inset-0 bg-gradient-radial from-brown-600/10 via-transparent to-transparent pointer-events-none" />
          
          <Header />
          <main className="pt-20"> {/* Added padding-top for header */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}