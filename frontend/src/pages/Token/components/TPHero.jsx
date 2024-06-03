import { Link } from 'react-router-dom';
import { btnspan } from '../../../assets';

const TPHero = () => {
  return (
    <div className='pt-36'>
      <div className='px-5 md:px-20'>
        <h2 className='text-white font-extrabold text-3xl mb-2 md:text-5xl'>
          Buy Crypto
        </h2>
        <p className='text-slate-300 font-[300] text-xl '>
          Buy crypto in just a few clicks
        </p>
        <div className='rounded-xl bg-cards1 p-8 mt-10 '>
          <div className='flex justify-center items-center'>
            <button
              className='bg-hbtn hover:ring-2 py-3 mb-5 shadow-btns text-center   px-20 pl-9 font-bold text-xl rounded-[20px] text-white relative'
              // data-aos='fade-up'
              // data-aos-duration='1000'
            >
              <Link>
                Connect wallet
                <span className='absolute right-4 top-2'>
                  <img src={btnspan} className='w-10 h-10' />
                </span>
              </Link>
            </button>{' '}
          </div>
          <p className='text-slate-300 font-[300] text-xl text-center'>
            By continuing you agree to our terms of service
          </p>
        </div>
      </div>
    </div>
  );
};

export default TPHero;
