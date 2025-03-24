import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
  return (
    <div className={inter.className}>
      <h1>Hello, Next.js with Google Fonts!</h1>
    </div>
  );
}




