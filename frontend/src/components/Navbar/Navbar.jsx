import { Logo } from '../../assets';

const Navbar = () => {
  return (
    <div className='bg-red-500 w-full bnjg-[#002B5E]'>
      <div className='flex flex-row'>
        <img src={Logo} />
        <h3 className='text-white'>SeeSeaAI</h3>
      </div>
    </div>
  );
};

export default Navbar;
