'use client';

import FooterP from '@/app/mad-x/component/footer';
import { usePathname } from 'next/navigation';
import Footer from './footer';


export default function FooterWrapper() {
  const pathname = usePathname();

  return pathname === '/mad-x' ? <FooterP /> : <Footer />;
}