import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
  
export const metadata: Metadata = {
  title: '노노노쑤쑤쑤',
  description: '노노노쑤쑤쑤의 learn nextJS!',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}