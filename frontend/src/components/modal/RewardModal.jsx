/* eslint-disable react/prop-types */

import { close, gift, reward, share } from '../../assets';

const RewardModal = ({ onclose }) => {
  const handleModalOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onclose();
    }
  };

  return (
    <div
      className='fixed backdrop-filter backdrop-blur-md h-full w-full flex items-center justify-center z-[999px] top-0 left-0'
      onClick={handleModalOverlayClick}
    >
      <div className='bg-transparent md:max-h-[450px] max-h-[600px] overflow-auto text-white border border-slate-300 rounded-lg p-5 w-full md:w-2/3'>
        <div className='flex items-start flex-col md:flex-row mb-6 justify-between'>
          <img src={reward} className='w-11 h-11 ' />
          <div className='font-[300] w-[80%]'>
            <p className='gap-4 flex items-end text-sm mb-4'>
              <span className='font-bold text-2xl'> SSAI Reward/Yield</span>EARN
              SSAI MONTHLY
            </p>
            <p>From SSAI pool rewards and revenue sharing!</p>
          </div>
          <img
            src={close}
            onClick={onclose}
            className=' cursor-pointer w-8 md:block hidden'
          />
          <img
            src={close}
            onClick={onclose}
            className=' cursor-pointer w-8 md:hidden block absolute right-7'
          />
        </div>
        <div className='bg-[#010E35] rounded-[17px] md:mx-14'>
          <div className='bg-reward shadow-cards1 flex items-center gap-5 justify-center py-6 rounded-[10px] text-xl'>
            MY SSAI <span className='text-4xl font-bold'>0.00</span>
          </div>
          <div className='py-10 md:px-20 px-10 text-slate-300'>
            <p className='flex justify-between items-center mb-3 font-bold'>
              <span className='font-normal underline'>Next distribution</span>in
              30 days
            </p>
            <p className='flex justify-between items-center mb-3 font-bold'>
              <span className='font-normal underline'>Last distribution</span>
            </p>{' '}
            <p className='flex justify-between items-center mb-3  '>
              <span className='font-normal underline'>APR</span>0.00%
            </p>
            <p className='font-bold mb-3'>SSAI POOL</p>
            <p className='flex justify-between items-center mb-3  '>
              <span className='font-normal underline'>Reward amount</span>0 SSAI
            </p>
            <p className='font-bold mb-3'>TOTAL</p>
            <p className='font-normal text-gray-500 mb-3'>
              Available for claiming
            </p>
          </div>
        </div>
        <div className='flex justify-between mt-10 items-center'>
          <button className='bg-hbtn md:w-[270px] hover:ring-2 py-2 shadow-btns relative text-center px-14 pl-5 font-bold md:text-lg rounded-[20px] text-white '>
            Claim all
            <span className='absolute right-4 top-2'>
              <img src={gift} className='md:w-6 md:h-6 w-5 h-5' />
            </span>
          </button>{' '}
          <button className=' bg-none relative md:w-[270px] hover:ring-2 py-2  border border-slate-400  text-center px-10   font-bold md:text-lg rounded-[20px] text-white '>
            Learn more
            <span className='absolute right-4 top-2'>
              <img src={share} className='md:w-6 md:h-6 w-5 h-5' />
            </span>
          </button>{' '}
        </div>
      </div>
    </div>
  );
};

export default RewardModal;
