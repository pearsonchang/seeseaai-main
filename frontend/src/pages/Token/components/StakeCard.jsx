import { useState } from 'react';
import { btnspan, gcal, wbnb } from '../../../assets';
import Icons from '../../../components/Icon/Icon';
import WalletModal from '../../../components/modal/WalletModal';

const StakeCard = () => {
  const [selectedPurpose, setSelectedPurpose] = useState('30d');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (purpose) => {
    setSelectedPurpose(purpose);
  };

  const handleWalletModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const closeWalletModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className='bg-cards1  hover:ring-2 text-white p-6 flex lg:flex-row flex-col  items-center justify-between rounded-[12px] mb-5 cursor-pointer shadow-cards1'>
        <div className='flex flex-col items-center'>
          <img src={wbnb} />
          <p className='font-semibold mt-1'>WBNB</p>
          <p className='font-[300]'>STAKE&EARN</p>
        </div>
        <div className='w-[20%]'>
          <p className='font-semibold text-xl mb-2'>Stake periods:</p>
          <div className='flex gap-2 mb-2'>
            <button
              className={`rounded-md   p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '30d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('30d')}
            >
              30D
            </button>
            <button
              className={`rounded-md   p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '60d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('60d')}
            >
              60D
            </button>
            <button
              className={`rounded-md   p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '90d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('90d')}
            >
              90D
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <img src={gcal} className='w-5 h-5' />
            <p className='text-[12px] text-slate-300'>APR: 0.11%~0.19%</p>
          </div>
        </div>
        <div className='w-[20%]  text-center'>
          <p className='font-semibold text-xl mb-1'>Total Staked:</p>
          <p className='font[300] text-slate-200'>27587.7 CAKE</p>
          <p className='text-slate-300 font-[200]'>~$720000,00USD</p>
        </div>
        <div className='w-[25%] flex flex-col justify-center items-center'>
          {' '}
          <button
            className='bg-hbtn w-full hover:ring-2 py-2 shadow-btns z-0 text-center px-14 pl-5 font-bold md:text-lg rounded-[20px] text-white relative'
            //   data-aos='zoom-in'
            onClick={handleWalletModalClick}
            //   data-aos-duration='1000'
          >
            <>
              Connect wallet
              <span className='absolute right-4 top-2'>
                <img src={btnspan} className='md:w-6 md:h-6 w-8 h-8' />
              </span>
            </>
          </button>{' '}
          <p className='flex items-center gap-2 cursor-pointer text-slate-300 mt-3'>
            Details{' '}
            <span>
              {' '}
              <Icons
                icon='ooui:down-triangle'
                className='md:text-xl text-white text-xl'
              />
            </span>
          </p>
        </div>
      </div>
      {modalOpen && <WalletModal onclose={closeWalletModal} />}
    </div>
  );
};

export default StakeCard;
