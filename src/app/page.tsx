'use client';
import { Hero } from '@/components/Hero'; // Adjusted import path
import { Plans } from '@/components/Plans'; // Adjusted import path
import { Features } from '@/components/Features'; // Adjusted import path
import { Founders } from '@/components/Founders'; // Adjusted import path

export default function HomePage() {
  return (
    <>
      <Hero />
      <Plans />
      <Features />
      <Founders />
    </>
  );
}
