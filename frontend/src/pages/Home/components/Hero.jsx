import { Link } from 'react-router-dom';
import { HHero, btnspan, staking } from '../../../assets';

const Hero = () => {
  return (
    <div className=''>
      <div className='flex justify-between w-full items-center px-5 md:px-20'>
        <div className='lg:w-[50%] lg:p-0 py-16'>
          {' '}
          <h2
            className='text-white text-5xl md:text-6xl font-extrabold  '
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Perfectly store your AI technology in the{' '}
            <span className='bg-block  bg-clip-text text-transparent'>
              blockchain
            </span>{' '}
          </h2>
        </div>
        <div className='hidden lg:block'>
          <img
            src={HHero}
            className=''
            data-aos='zoom-in'
            data-aos-duration='1000'
          />
        </div>
      </div>
      <div className='px-5 md:px-20 py-10 mb-10 md:mb-40 flex md:flex-row md:gap-0 gap-10 flex-col justify-between'>
        <div className='md:w-[50%]'>
          <p
            className='md:text-4xl text-2xl text-slate-300 font-[300]'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Provide value to your AI datasets - participate in SeeSeaAI and
            exchange models for value
          </p>
        </div>
        <div className='flex flex-col md:w-[40%] gap-5  text-2xl'>
          <button
            className='bg-hbtn py-3 text-center rounded-[20px] text-white relative'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <Link>
              Publish{' '}
              <span className='absolute right-4 top-2'>
                <img src={btnspan} className='w-10 h-10' />
              </span>
            </Link>
          </button>{' '}
          <button
            className='bg-hbtn py-3 rounded-[20px] text-white'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Participation Detail
          </button>
        </div>
      </div>
      <div className='px-5 md:px-20 py-6 flex md:flex-row md:gap-0 gap-10 flex-col-reverse justify-between'>
        {' '}
        <div className='flex flex-col md:w-[40%] gap-5  text-2xl'>
          <button
            className='bg-hbtn2 py-3 text-center rounded-[20px] text-white relative'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <Link>Token purchase</Link>
          </button>{' '}
          <button
            className='bg-hbtn2 py-3 rounded-[20px] text-white'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Token staking
          </button>
        </div>
        <div>
          <img src={staking} className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
