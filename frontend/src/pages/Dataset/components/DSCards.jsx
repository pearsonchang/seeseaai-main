import { dscard } from '../../../assets';
import Icons from '../../../components/Icon/Icon';

const DSCards = () => {
  return (
    <div className='px-5 md:px-20 mb-6 '>
      <div className='bg-[#FFFFFF1A] flex items-start gap-5 p-5'>
        <img src={dscard} className='rounded-xl' />
        <div className='w-full text-slate-300'>
          <div className='flex justify-between items-center mb-3'>
            <p className='text-slate-300 flex items-center gap-2 font-[300]'>
              <span className='text-[#FFD25D] text-2xl font-normal'>
                Code name{' '}
              </span>
              <span className='flex items-center gap-2'>
                <div className='w-4 h-4 inline-block bg-[#266DA1] rounded-full'></div>
                Python
              </span>
            </p>
            <div className='flex gap-4 items-center'>
              <div className='rounded-2xl gap-3 flex items-center justify-center border border-white text-center text-white py-1 px-5'>
                <Icons icon='mdi:user-multiple' className='w-6 h-6' />
                Sponsor
              </div>

              <div className='bg-[#4340D1] rounded-2xl flex items-center justify-center gap-3 px-5 py-[3px] text-slate-300'>
                <Icons
                  icon='material-symbols-light:star-outline'
                  className='text-3xl'
                />
                292.5k <span>Star</span>{' '}
                <Icons icon='fe:drop-down' className='text-white text-3xl ' />
              </div>
            </div>
          </div>
          <p className='font-[300] mb-4'>
            Data description Label Studio is a multi-type data labeling and
            annotation tool with standardized output format
          </p>
          <div className='grid gap-4 grid-cols-5 bg-[#010E35] p-3 rounded-lg'>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
            <p className='bg-[#0176CC] text-white text-center rounded-full p-2'>
              Keyword
            </p>
          </div>
          <p className='font-[300] mt-5'>Updated 17 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default DSCards;
