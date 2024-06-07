import { useState } from 'react';
import { close, wbnb } from '../../assets';
import './styles.css';
import Icons from '../Icon/Icon';

/* eslint-disable react/prop-types */
const StakeModal = ({ onclose }) => {
  const [value, setValue] = useState(0);
  const [selectedPurpose, setSelectedPurpose] = useState('30d');

  const handleSelect = (purpose) => {
    setSelectedPurpose(purpose);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
      <div className='bg-transparent max-h-[450px] overflow-auto text-white border border-slate-300 rounded-lg p-5 w-full md:w-1/2'>
        <div className='flex justify-between items-start mb-4'>
          <div className='flex flex-col items-center'>
            <img src={wbnb} />
            <p className='font-semibold mt-1'>WBNB</p>
            <p className='font-[300]'>Balance:0</p>
          </div>
          <div className='w-[75%] '>
            <h5 className='font-bold text-xl'>Stake AMOUNT:</h5>
            <p className='py-2 font-[300]'>WBNB</p>
            <input
              className='w-full bg-[#010E35] py-2 rounded-lg px-2 outline-none hover:ring-2'
              value={value}
              placeholder='0.0'
            />
          </div>
          <img src={close} onClick={onclose} className=' cursor-pointer w-8' />
        </div>
        <div className='pl-12 pr-12'>
          <div className='ml-14 -mt-10'>
            <p className='font-[300] text-slate-300 text-sm '>
              ~{120 - value}USD
            </p>
            <input
              type='range'
              min='0'
              max='120'
              onChange={handleChange}
              className='w-full mb-5 h-3 bg-[#187BCE] appearance-none rounded-full focus:outline-none lfocus:ring-2 lfocus:ring-[#187BCE] cursor-pointer slider-thumb'
            />
          </div>
          <div className='grid grid-cols-4 gap-2'>
            <p className='bg-[#187BCE] text-center rounded-lg py-1'>25%</p>
            <p className='bg-[#187BCE] text-center rounded-lg py-1'>50%</p>
            <p className='bg-[#187BCE] text-center rounded-lg py-1'>75%</p>
            <p className='bg-[#187BCE] text-center rounded-lg py-1'>Max</p>
          </div>
          <div className='flex justify-between mt-5'>
            <div className=' w-[55%]'>
              <h5 className='font-bold text-lg'>Stake Periods:</h5>{' '}
              <div className='grid grid-cols-3 gap-3 my-2 '>
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
              <h5 className='font-bold text-lg mt-9'>POSITION OVERVIEW</h5>{' '}
            </div>
            <div className='w-[40%] mt-5'>
              <p className='flex gap-2 text-[#B9B9B9] text-[12px] font-[300] '>
                <span>
                  <Icons icon='ph:info-light' className='text-lg mt-[1px]' />
                </span>
                <span>
                  Funds will not be available for withdrawal for the first 10
                  days, and subsequently an early withdrawal fee will be applied
                  if amount is unstaked before locked period is up.{' '}
                  <a className='h underline'>Click here for more</a>
                </span>
              </p>
            </div>
          </div>
          <div className=' bg-[#010E35] p-3 rounded-lg mt-4 w-2/3'>khbyk</div>
        </div>
      </div>
    </div>
  );
};

export default StakeModal;
