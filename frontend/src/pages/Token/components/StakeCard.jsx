import { useState } from 'react';
import { Logo, gcal } from '../../../assets';
import Icons from '../../../components/Icon/Icon';
import StakeModal from '../../../components/modal/StakeModal';
import ConnectWallet from '../../../components/Button/ConnectWallet';

const StakeCard = () => {
  const [modalOpen2, setModalOpen2] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('30d');

  const handleSelect = (purpose) => {
    setSelectedPurpose(purpose);
  };

  const handleStakeModalClick = () => {
    setModalOpen2(!modalOpen2);
  };

  const closeStakeModal = () => {
    setModalOpen2(false);
  };

  return (
    <div>
      <div className='bg-cards1  hover:ring-2 text-white p-6 flex lg:flex-row flex-col lg:items-center justify-between rounded-[12px] mb-5 cursor-pointer shadow-cards1'>
        <div className='flex flex-col lg:items-center'>
          <img src={Logo} className='w-fit rounded-full' />
          <p className='font-semibold mt-1'>SSAI</p>
          <p className='font-[300]'>STAKE&EARN</p>
        </div>
        <div className='lg:w-[20%] w-full lg:my-0 my-7'>
          <p className='font-semibold text-xl mb-2'>Stake periods:</p>
          <div className='flex gap-2 mb-2'>
            <button
              className={`rounded-md lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '30d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('30d')}
            >
              30D
            </button>{' '}
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '60d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('60d')}
            >
              60D
            </button>
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '90d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('90d')}
            >
              90D
            </button>{' '}
          </div>
          <div className='flex gap-2 mb-2'>
            {' '}
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '180d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('180d')}
            >
              180D
            </button>
            <button
              className={`rounded-md lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '360d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('360d')}
            >
              360D
            </button>
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '720d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('720d')}
            >
              720D
            </button>{' '}
          </div>
          <div className='flex items-center gap-2'>
            <img
              src={gcal}
              className='w-5 h-5'
              onClick={handleStakeModalClick}
            />
            <p className='text-[12px] text-slate-300'>
              APR:{' '}
              {selectedPurpose === '30d'
                ? '8%~10%'
                : selectedPurpose === '60d'
                ? '13%~15%'
                : selectedPurpose === '90d'
                ? '18%~20%'
                : selectedPurpose === '180d'
                ? '48%~50%'
                : selectedPurpose === '360d'
                ? '98%~100%'
                : selectedPurpose === '720d'
                ? '298%~300%'
                : null}{' '}
            </p>
          </div>
        </div>
        <div className='lg:w-[20%] w-full lg:mb-0 mb-9 lg:text-center'>
          <p className='font-semibold text-xl mb-1'>Total Staked:</p>
          <p className='font[300] text-slate-200'>27587.7 SSAI</p>
          <p className='text-slate-300 font-[200]'>~$720000,00USD</p>
        </div>
        <div className='lg:w-[25%] w-full flex flex-col justify-center lg:items-center'>
          <ConnectWallet
            className='bg-hbtn w-full hover:ring-2 py-2 shadow-btns  text-center px-14 pl-5 font-bold md:text-lg rounded-[20px] text-white '
            imgClassName='md:w-6 md:h-6 w-8 h-8'
          />{' '}
          <button
            className='bg-hbtn2 mt-4 hover:ring-2 py-2 w-full shadow-btns text-center px-14 font-bold md:text-lg rounded-[20px] text-white '
            //   data-aos='zoom-in'
            //   data-aos-duration='1000'
          >
            Stake
          </button>
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
      {modalOpen2 && <StakeModal onclose={closeStakeModal} />}
    </div>
  );
};

export default StakeCard;
