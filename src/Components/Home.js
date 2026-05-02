import React from 'react'
import Hero from '../Home/Hero'
import Trending from '../Home/Trending'
import SearchSection from '../Home/Search';
import Featured from '../Home/Featured';
import Community from '../Home/Community';
import CTA from '../Home/CTA';
import Footer from '../Home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <SearchSection></SearchSection>
      <Trending />
      <Featured></Featured>
      <Community></Community>
      <CTA/>
      <Footer></Footer>
     
    </div>
  );
}
