import { license, novel, platform, prospect, security } from '../../../assets';

const Vision = () => {
  return (
    <div className='py-16 pt-36'>
      <div className='   px-5 md:px-20'>
        <p className='md:text-4xl  text-2xl text-slate-300 font-[300] text-center lg:text-right '>
          At SeeSeaAi, our vision is to decentralize and capitalize AI models.
          By leveraging <br className='xl:block hidden' />
          blockchain and Al technology, we are creating a transparent, clear and
          real <br className='xl:block hidden' />
          decentralized ecosystem
        </p>
      </div>
      <div className='px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-16 my-20'>
        <div
          className='bg-cards1 shadow-cards1  items-center flex flex-col rounded-[17px] p-8'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <img src={platform} className='w-60 h-60' />
          <p className='text-[#B9BBC3] font-bold text-3xl text-center'>
            Platform content creation
          </p>
        </div>
        <div
          className='bg-cards1 shadow-cards1 items-center flex flex-col  rounded-[17px] p-8'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <img src={novel} className='w-60 h-60' />
          <p className='text-[#B9BBC3] font-bold text-3xl text-center'>
            Novel concept
          </p>
        </div>
        <div
          className='bg-cards1 shadow-cards1 items-center flex flex-col  rounded-[17px] p-8'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <img src={license} className='w-60 h-60' />
          <p className='text-[#B9BBC3] font-bold text-3xl text-center'>
            Provide licensing opportunities
          </p>
        </div>
        <div
          className='bg-cards1 shadow-cards1  items-center flex flex-col rounded-[17px] p-8'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <img src={security} className='w-60 h-60' />
          <p className='text-[#B9BBC3] font-bold text-3xl text-center'>
            Blockchain security
          </p>
        </div>
      </div>
      <div className='relative mt-36 px-5 md:px-20'>
        <img src={prospect} className='' />
        <p className='bg-cards1 absolute w-[550px] top-0 p-8 backdrop-filter backdrop-blur-sm md:right-20 right-5 shadow-cards1 rounded-[17px] text-slate-300 text-xl'>
          Launch a platform for AI asset trading and paid use of AI works that
          will play a huge role in the next-generation AI assetization process,
          including but not limited to AI solution content detection, AI
          algorithm identification, AI data testing, analysis of content sources
          and content creation motivations, Compile content to adapt to
          different application scenarios.
        </p>
      </div>
    </div>
  );
};

export default Vision;
