import { useState } from 'react';
import { Logo, User } from '../../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    if (index !== 2) {
      setDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const renderDropdownContent = (item) => {
    switch (item) {
      case 'Publish':
        return (
          <ul className='list-none flex flex-col gap-2'>
            <li className='border-b border-slate-500 pb-1'>Publish</li>
            <li className='border-b border-slate-500 pb-2'>How to Release</li>
            <li>Auditing Body</li>
          </ul>
        );
      case 'Token':
        return (
          <ul className='list-none flex flex-col gap-2'>
            <li className='border-b border-slate-500 pb-1'>Token purchase</li>
            <li className='border-b border-slate-500 pb-2'>Token staking</li>
            <li className='border-b border-slate-500 pb-2'>
              Unlock allocation chart
            </li>
            <li>Functions</li>
          </ul>
        );
      case 'Help':
        return (
          <ul className='list-none flex flex-col gap-2'>
            <li className='border-b border-slate-500 pb-1'>Help center</li>
            <li className='border-b border-slate-500 pb-2'>User guide</li>
            <li>White paper</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-[#002B5E] top-0 z-50 fixed  w-full pr-16'>
      <div className='flex justify-between items-center'>
        <Link to='/'>
          <div className='flex items-center gap-4'>
            <img src={Logo} alt='Logo' />
            <h3 className='text-white text-2xl'>SeeSeaAI</h3>
          </div>
        </Link>
        <ul className='text-white font-[500] text-xl list-none hidden md:flex justify-around w-[40%]'>
          {['Publish', 'Token', 'Dataset', 'Help'].map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className='relative'
            >
              {item === 'Dataset' ? (
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              ) : (
                <span className='cursor-pointer'>{item}</span>
              )}
              {dropdown === index && item !== 'Dataset' && (
                <div
                  className='absolute font-normal text-lg top-full mt-2 w-[250px] rounded-b-lg -left-24 bg-[#002B5E] text-slate-300 text-center p-4 shadow-2xl'
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {renderDropdownContent(item)}
                </div>
              )}
            </li>
          ))}
        </ul>
        <img src={User} alt='User' />
      </div>
    </div>
  );
};

export default Navbar;
