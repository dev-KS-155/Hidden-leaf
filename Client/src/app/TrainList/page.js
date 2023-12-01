import Trainslist from '@/app/TrainList/Trainslist'; 
import Footer from '@/componets/footer/Footer';
import React from 'react';
export default function TrainListPage() {
  return (
    <div className="bg-slate-200">
     <Trainslist />
     <Footer/>
    </div>
  );
}