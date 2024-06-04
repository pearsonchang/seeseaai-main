import { close } from '../../assets';

/* eslint-disable react/prop-types */
const StakeModal = ({ onclose }) => {
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
        <div className='flex justify-between items-center mb-4'>
          <h5 className='font-bold text-xl'>Stake AMOUNT:</h5>
          <img src={close} onClick={onclose} className=' cursor-pointer w-8' />
        </div>
      </div>
    </div>
  );
};

export default StakeModal;
