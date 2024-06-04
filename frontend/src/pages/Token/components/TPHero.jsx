import { Link } from 'react-router-dom';
import { btnspan, merc, bnb, bnb2, reload, usd } from '../../../assets';
import Icons from '../../../components/Icon/Icon';
import { useState } from 'react';

const TPHero = () => {
  const [val, setVal] = useState(150);
  const [val2, setVal2] = useState(0.23452);

  return (
    <div className='pt-36'>
      <div className='px-5 md:px-20'>
        <h2
          className='text-white font-extrabold text-3xl mb-2 md:text-5xl'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          Buy Crypto
        </h2>
        <p
          className='text-slate-300 font-[300] text-xl '
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          Buy crypto in just a few clicks
        </p>
        <div className='rounded-xl bg-cards1 p-5  md:p-8 mt-10 text-white'>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <input
              className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-3 md:px-6 text-xl font-[300] py-4'
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <div className='absolute flex justify-between items-center top-4 md:top-3 right-3 gap-3 md:gap-5'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <img src={usd} className='md:w-8 w-6 md:h-8 h-6' />
              <p className='md:text-2xl text-xl'>USD</p>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              />
            </div>
          </div>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <input
              className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none  px-3 md:px-6 text-xl font-[300] py-4'
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
            />
            <div className='absolute flex justify-between items-center top-3 md:top-2 right-3 gap-2 md:gap-4'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <img src={bnb} className='md:w-8 w-6 md:h-8 h-6' />
              <div className='text-center'>
                <p className='md:text-2xl text-xl p-0'>BNB</p>
                <p className='md:text-xs text-[10px] font-[200] -mt-1'>
                  On binance
                </p>
              </div>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl '
              />
            </div>
          </div>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1400'
          >
            <input className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-6 text-xl font-[300] py-4' />
            <div className='absolute flex justify-between gap-2 md:gap-5 items-center top-4 md:top-3 left-3'>
              <img
                src={merc}
                className='md:w-8 w-6 md:h-8 h-6 sm:block hidden'
              />
              <p className='md:text-2xl text-xl sm:block hidden'>Mercuryo</p>
              <p className='font-[200] md:text-xl '>1 BNB=$590.91</p>
            </div>
            <div className='absolute flex justify-between items-center top-3 right-3 gap-2 md:gap-4'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <div className='bg-[#009BF3] md:px-2 px-1 py-1 rounded-md flex items-center'>
                <p className='text-xs md:text-[16px]'>Best price</p>
                <Icons icon='hugeicons:flash' />
              </div>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              />
            </div>
          </div>
          <div
            className='flex justify-center items-center mb-16'
            data-aos='fade-up'
            data-aos-duration='1600'
          >
            <div className='flex bg-[#010E35] items-center gap-3 rounded-[12px] px-6 py-1'>
              <img src={bnb2} className='w-8 h-8' />{' '}
              <p className='text-lg font-[200] '>Binance Smart Chain</p>
            </div>
          </div>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <input className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-6 text-xl font-[300] py-4' />
            <div className='absolute flex justify-between gap-2 md:gap-5 items-center top-4 md:top-3 left-3'>
              <p className='md:text-2xl text-xl  '>Est total fees:</p>
              <p className='font-[200] md:text-xl '>$2.98</p>
            </div>
            <div className='absolute flex justify-between items-center top-3 right-3 gap-2 md:gap-4'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <div className='md:px-2 px-1 py-1 rounded-md flex items-center'>
                <p className='text-xs md:text-[16px]'>Show details</p>
              </div>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button
              className='bg-hbtn hover:ring-2 py-3 mb-5 shadow-btns text-center px-20 pl-9 font-bold md:text-xl rounded-[20px] text-white relative'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <Link>
                Connect wallet
                <span className='absolute right-4 top-2'>
                  <img src={btnspan} className='md:w-10 md:h-10 w-8 h-8' />
                </span>
              </Link>
            </button>{' '}
          </div>
          <div className='relative' data-aos='fade-up' data-aos-duration='1200'>
            <p className='text-slate-300 font-[300] text-xl text-center'>
              By continuing you agree to our terms of service
            </p>
            <img
              src={reload}
              className='absolute right-8 cursor-pointer sm:block hidden -top-2 w-10'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPHero;
