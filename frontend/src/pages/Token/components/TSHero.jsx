import StakeCard from './StakeCard';

const TSHero = () => {
  return (
    <div className='pt-36'>
      <div className='px-5 md:px-20'>
        <h2
          className='text-white font-extrabold text-3xl mb-2 md:text-5xl'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          Easy Staking
        </h2>
        <p
          className='text-slate-300 font-[300] text-xl '
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          Simple Earn Staking
        </p>
        <div className='mt-10'>
          <StakeCard />
          <StakeCard />
          <StakeCard />
          <StakeCard />
          <StakeCard />
        </div>
      </div>
    </div>
  );
};

export default TSHero;
