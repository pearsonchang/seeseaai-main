import { useState } from 'react';
import { gift, ssai } from '../../../assets';
import StakeCard from './StakeCard';
import RewardModal from '../../../components/modal/RewardModal';

const TSHero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleRewardModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const closeRewardModal = () => {
    setModalOpen(false);
  };

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
        <div className='my-16'>
          <h2
            className='text-white font-extrabold text-3xl mb-2 md:text-5xl'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Benefits of SSAI
          </h2>
          <div className='bg-cards1 md:flex-row flex-col text-white mt-16 rounded-[12px] p-6 flex justify-between '>
            <img src={ssai} className='md:mb-0 mb-10' />
            <div className='md:w-[60%] '>
              <h3 className='font-semibold text-3xl mb-7'>Earn SSAI</h3>
              <div className='flex md:flex-row flex-col md:gap-44 gap-10'>
                <div>
                  <p className='font-semibold text-2xl'>Total Distributed</p>
                  <p className='text-slate-300 text-xl'>27587.7 CAKE</p>
                </div>
                <ul className='font-semibold text-xl list-disc md:pl-0 pl-6'>
                  <li>Monthly revenue sharing</li>
                  <li>Monthly CAKE pool rewards</li>
                </ul>
              </div>
              <div className='flex mt-6 md:-ml-20 justify-center items-center'>
                <button
                  className='bg-hbtn md:w-1/3 hover:ring-2 py-2 shadow-btns relative text-center px-14 pl-5 font-bold md:text-lg rounded-[20px] text-white '
                  //   data-aos='zoom-in'
                  //   data-aos-duration='1000'
                  onClick={handleRewardModalClick}
                >
                  Check reward
                  <span className='absolute right-4 top-2'>
                    <img src={gift} className='md:w-6 md:h-6 w-5 h-5' />
                  </span>
                </button>{' '}
                {modalOpen && <RewardModal onclose={closeRewardModal} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TSHero;
