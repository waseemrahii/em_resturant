import{ useState } from 'react';
import { Link } from "react-router-dom";
import Alldriverseyeform1 from './Alldriverseyeform1';
import Alldriverseyeform2 from './Alldriverseyeform2';
import Alldriverseyeform3 from './Alldriverseyeform3';
import Alldriverseyebtn from './Alldriverseyebtn';

const Alldrivrseyemain = () => {
  const [activeTab, setActiveTab] = useState(''); // No default active tab

  const handleTabClick = (tab) => {
    console.log('Tab clicked:', tab); // Log the clicked tab
    setActiveTab(tab);
  };

  return (
    <>
      <div className='p-4 sm:p-6 md:p-12'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-5 text-lg md:text-2xl'>
          <Link to='/alldrivers-view'>
            <button 
              onClick={() => handleTabClick('basic')}
              className={`relative text-gray-800 bg-transparent border-b-2 ${activeTab === 'basic' ? 'border-blue-500 text-blue-500' : 'border-transparent'} hover:border-blue-500 hover:text-blue-500`}
            >
              Basic
            </button>
          </Link>
          <Link to='/alldrivers/order'>
            <button 
              onClick={() => handleTabClick('orders')}
              className={`relative text-gray-800 bg-transparent border-b-2 ${activeTab === 'orders' ? 'border-blue-500 text-blue-500' : 'border-transparent'} hover:border-blue-500 hover:text-blue-500`}
            >
              Orders
            </button>
          </Link>
          <Link to='/alldrivers/payout'>
            <button 
              onClick={() => handleTabClick('payout')}
              className={`relative text-gray-800 bg-transparent border-b-2 ${activeTab === 'payout' ? 'border-blue-500 text-blue-500' : 'border-transparent'} hover:border-blue-500 hover:text-blue-500`}
            >
              Payouts
            </button>
          </Link>
          <Link to='/alldrivers/payoutsrequest'>
            <button 
              onClick={() => handleTabClick('payoutsrequest')}
              className={`relative text-gray-800 bg-transparent border-b-2 ${activeTab === 'payoutsrequest' ? 'border-blue-500 text-blue-500' : 'border-transparent'} hover:border-blue-500 hover:text-blue-500`}
            >
              Payout Request
            </button>
          </Link>
          <Link to='/alldrivers/wallettransaction'>
            <button 
              onClick={() => handleTabClick('wallettransaction')}
              className={`relative text-gray-800 bg-transparent border-b-2 ${activeTab === 'wallettransaction' ? 'border-blue-500 text-blue-500' : 'border-transparent'} hover:border-blue-500 hover:text-blue-500`}
            >
              Wallet Transaction
            </button>
          </Link>
        </div>
      </div>
      <Alldriverseyeform1 />
      <Alldriverseyeform2 />
      <Alldriverseyeform3 />
      <Alldriverseyebtn />
    </>
  )
}

export default Alldrivrseyemain;
