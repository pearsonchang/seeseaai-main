/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Logo, User, whitepaper } from '../../assets';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import ComingSoon from '../modal/ComingSoon';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [dropdown2, setDropdown2] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [modalOpen, setModalOpen] = useState(false);

  const handleComingSoonModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const closeComingSoonModal = () => {
    setModalOpen(false);
  };

  const handleDownload = () => {
    // const link = document.createElement('a');
    // link.href = whitepaper;
    // link.download = 'SeeSeaAI-WhitePaper.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    window.open(whitepaper, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile && index !== 2) {
      setDropdown(index);
    }
  };

  const handleMouseEnter2 = () => {
    if (!isMobile) {
      setDropdown2(true);
    }
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const handleMouseLeave2 = () => {
    setDropdown2(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDocumentClick = (e) => {
    if (isMobileMenuOpen && !e.target.closest(`.${styles.menuItems}`)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMobileMenuOpen]);

  const renderDropdownContent = (item) => {
    if (isMobile) return null;
    switch (item) {
      case 'Publish':
        return (
          <ul className='list-none flex flex-col'>
            {' '}
            <Link
              to='/publish'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className='hover:bg-white hover:text-blue-950'
            >
              <li className='  border-b border-slate-500 pb-2 pt-1'>Publish</li>
            </Link>
            <li
              className='hover:bg-white hover:text-blue-950 cursor-pointer   border-b border-slate-500 pb-2 pt-1'
              onClick={handleComingSoonModalClick}
            >
              How to Release
            </li>
            <li
              className='hover:bg-white hover:text-blue-950 cursor-pointer  pb-2 pt-1'
              onClick={handleComingSoonModalClick}
            >
              Auditing Body
            </li>
          </ul>
        );
      case 'Token':
        return (
          <ul className='list-none flex flex-col '>
            <Link
              to='/token-purchase'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className='hover:bg-white hover:text-blue-950'
            >
              <li className='border-b border-slate-500 pb-2 pt-1'>
                Token purchase
              </li>
            </Link>
            <Link
              to='/token-staking'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className='hover:bg-white hover:text-blue-950'
            >
              <li className='border-b border-slate-500 pt-1 pb-2'>
                Token staking
              </li>
            </Link>{' '}
            <Link
              to='/unlock-allocation'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className='hover:bg-white hover:text-blue-950'
            >
              <li className='border-b border-slate-500 pt-1 pb-2'>
                Unlock allocation chart
              </li>
            </Link>
            <li
              className='hover:bg-white hover:text-blue-950 cursor-pointer  pb-2 pt-1'
              onClick={handleComingSoonModalClick}
            >
              Functions
            </li>
          </ul>
        );
      case 'Help':
        return (
          <ul className='list-none flex flex-col'>
            <Link
              to='/help-center'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className='hover:bg-white hover:text-blue-950'
            >
              <li className='border-b border-slate-500 pt-1 pb-2'>
                Help center
              </li>
            </Link>
            <li
              className='hover:bg-white hover:text-blue-950 cursor-pointer   border-b border-slate-500 pb-2 pt-1'
              onClick={handleComingSoonModalClick}
            >
              User guide
            </li>
            <li
              className='hover:bg-white hover:text-blue-950 cursor-pointer  pb-2 pt-1'
              onClick={handleDownload}
            >
              White paper
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-[#002B5E] top-0 z-50 shadow-btns fixed  w-full pr-5 md:pr-16 ${styles.navbar}`}
    >
      <div
        className={`flex justify-between items-center ${styles.navbarContainer}`}
      >
        <Link to='/'>
          <div className='flex items-center gap-4'>
            <img src={Logo} alt='Logo' />
            <h3 className='text-white text-2xl'>SeeSeaAI</h3>
          </div>
        </Link>{' '}
        {/* <input type='checkbox' onChange={toggleMobileMenu} />
        <div className={styles.hamburgerLines}>
          <span
            className={`bg-white ${styles.line} ${styles.line1} ${
              scrolling ? 'bg-green-600' : ''
            }`}
          ></span>
          <span
            className={`bg-white ${styles.line} ${styles.line2} ${
              scrolling ? 'bg-green-600' : ''
            }`}
          ></span>
          <span
            className={`bg-white ${styles.line} ${styles.line3} ${
              scrolling ? 'bg-green-600' : ''
            }`}
          ></span>
        </div> */}
        <ul
          className={`text-white font-[500] text-xl list-none hidden md:flex justify-around w-[40%] ${styles.menuItems}`}
        >
          {['Publish', 'Token', 'Dataset', 'Help'].map((item, index) => (
            <li key={index} className='relative'>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item === 'Dataset' ? (
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                ) : (
                  <span className='cursor-pointer'>{item}</span>
                )}
                {dropdown === index && item !== 'Dataset' && (
                  <div
                    className='absolute font-normal text-lg top-5 mt-2 w-[250px] rounded-b-lg -left-24 bg-[#002B5E] text-slate-300 text-center pt-4 shadow-2xl'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {renderDropdownContent(item)}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        {modalOpen && <ComingSoon onclose={closeComingSoonModal} />}
        <div className='relative'>
          <img
            src={User}
            alt='User'
            className=''
            onMouseEnter={() => handleMouseEnter2()}
            onMouseLeave={handleMouseLeave2}
          />{' '}
          {dropdown2 && (
            <div
              className='absolute font-normal text-lg top-5 mt-5 w-[200px] rounded-b-lg right-0 bg-[#002B5E] text-slate-300 text-center py-4 pb-0 shadow-2xl'
              onMouseEnter={() => handleMouseEnter2()}
              onMouseLeave={handleMouseLeave2}
            >
              <ul className='list-none flex flex-col'>
                {' '}
                {/* <Link
                  to='/publish'
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className='hover:bg-white hover:text-blue-950'
                > */}
                <li className='border-b border-slate-500 pb-2 pt-1'>
                  No KYC login
                </li>
                {/* </Link> */}
                <li className='border-b border-slate-500 pb-2 pt-1'>
                  Security and Privacy
                </li>{' '}
                <Link
                  to='/my-releases'
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className='hover:bg-white hover:text-blue-950'
                >
                  <li className='  pt-2 pb-2 '>My releases</li>
                </Link>{' '}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
