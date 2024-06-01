import { HHero } from '../../../assets';

const Hero = () => {
  return (
    <div className=''>
      <div className='flex justify-between w-full items-center pl-12'>
        <div className='w-[50%]'>
          {' '}
          <h2
            className='text-white text-6xl font-extrabold  '
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Perfectly store your AI technology in the{' '}
            <span className='bg-block  bg-clip-text text-transparent'>
              blockchain
            </span>{' '}
          </h2>
        </div>
        <div className=''>
          <img
            src={HHero}
            className=''
            data-aos='zoom-in'
            data-aos-duration='1000'
          />
        </div>
      </div>
      <div className='px-12 flex justify-between'>
        <div>
          <p className='text-xl text-slate-300 font-[300]'>
            Provide value to your AI datasets - participate in SeeSeaAI and
            exchange models for value
          </p>
        </div>
        <div>
          <button className='bg-hbtn'>Publish</button>
          <button>Participation Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
