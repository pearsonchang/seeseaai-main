import Icons from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='flex justify-center flex-col items-center gap-8 pb-10'>
      <div className='flex justify-center gap-10 items-center'>
        <div className='b bg-[#FFFFFF1A] rounded-full p-2 text-5xl'>
          <Icons icon='logos:telegram' />
        </div>
        <div className='b bg-[#FFFFFF1A] rounded-full p-2 text-5xl'>
          <Icons icon='logos:discord-icon' />
        </div>
        <div className='b bg-[#FFFFFF1A] rounded-full p-2 text-5xl'>
          <Icons icon='pajamas:twitter' className='bg-white p-2 rounded-full' />
        </div>
      </div>
      <p className='text-xl text-white'>18+and Copyright @ SeeSeaAI</p>
    </footer>
  );
};

export default Footer;
