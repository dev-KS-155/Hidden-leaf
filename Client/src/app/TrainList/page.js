import Trainslist from '@/app/TrainList/Trainslist'; 
import Footer from '@/componets/footer/Footer';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import UserNavbar from '../train/navbar/UserNavbar';
export default function TrainListPage() {
  return (
    <div className="bg-slate-200">
      <Navbar/>
      <UserNavbar/>
     <Trainslist />
     <Footer/>
    </div>
  );
}