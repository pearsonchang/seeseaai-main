import { merc, bnb2, reload, usd, Logo, usdc, usdt } from '../../../assets';
import Icons from '../../../components/Icon/Icon';
import { useState } from 'react';
import ConnectWallet from '../../../components/Button/ConnectWallet';

const TPHero = () => {
  const [val, setVal] = useState(150);
  const [val2, setVal2] = useState(0.23452);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { name: 'USD', icon: usd },
    { name: 'USDT', icon: usdt },
    { name: 'USDC', icon: usdc },
  ];

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    console.log('currency', currency);
  };

  return (
    <div className='pt-36'>
      <div className='px-5 md:px-20'>
        <h2
          className='text-white font-extrabold text-3xl mb-2 md:text-5xl'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          Buy Crypto
        </h2>
        <p
          className='text-slate-300 font-[300] text-xl '
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          Buy crypto in just a few clicks
        </p>
        <div className='rounded-xl bg-cards1 p-5  md:p-8 mt-10 text-white'>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            // data-aos='fade-up'
            // data-aos-duration='1000'
          >
            <input
              className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-3 md:px-6 text-xl font-[300] py-4'
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <div className='absolute flex justify-between items-center top-4 md:top-3 right-3 gap-3 md:gap-5'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              {/* <img src={usd} className='md:w-8 w-6 md:h-8 h-6' />
              <p className='md:text-2xl text-xl'>USD</p>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              /> */}{' '}
              <img src={usd} className='md:w-8 w-6 md:h-8 h-6' />
              <p className='md:text-2xl text-xl'>USD</p>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              />{' '}
              {/* <div className='relative inline-block text-left'>
                <div>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    id='menu-button'
                    aria-expanded='true'
                    aria-haspopup='true'
                  >
                    {selectedCurrency}
                    <Icons
                      icon='ooui:down-triangle'
                      className='md:text-2xl text-xl ml-2'
                    />
                  </button>
                </div>

                <div
                  className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='menu-button'
                  tabIndex='-1'
                >
                  <div className='py-1' role='none'>
                    {currencies.map((currency) => (
                      <div
                        key={currency.name}
                        className='absolute flex justify-between items-center top-4 md:top-3 right-3 gap-3 md:gap-5 cursor-pointer'
                        onClick={() => handleSelect(currency.name)}
                      >
                        <Icons
                          icon='pepicons-pencil:line-y'
                          className='md:text-4xl text-3xl text-white'
                        />
                        <img
                          src={currency.icon}
                          className='md:w-8 w-6 md:h-8 h-6'
                          alt={`${currency.name} icon`}
                        />
                        <p className='md:text-2xl text-xl'>{currency.name}</p>
                        <Icons
                          icon='ooui:down-triangle'
                          className='md:text-2xl text-xl'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <input
              className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none  px-3 md:px-6 text-xl font-[300] py-4'
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
            />
            <div className='absolute flex justify-between items-center top-3 md:top-2 right-3 gap-2 md:gap-4'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <img src={Logo} className='md:w-8 w-6 md:h-8 h-6' />
              <div className='text-center'>
                <p className='md:text-2xl text-xl p-0'>SSAI</p>
                <p className='md:text-xs text-[10px] font-[200] -mt-1'>
                  On binance
                </p>
              </div>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl '
              />
            </div>
          </div>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1400'
          >
            <input className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-6 text-xl font-[300] py-4' />
            <div className='absolute flex justify-between gap-2 md:gap-5 items-center top-4 md:top-3 left-3'>
              <img
                src={merc}
                className='md:w-8 w-6 md:h-8 h-6 sm:block hidden'
              />
              <p className='md:text-2xl text-xl sm:block hidden'>Mercuryo</p>
              <p className='font-[200] md:text-xl '>1 BNB=$590.91</p>
            </div>
            <div className='absolute flex justify-between items-center top-3 right-3 gap-2 md:gap-4'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <div className='bg-[#009BF3] md:px-2 px-1 py-1 rounded-md flex items-center'>
                <p className='text-xs md:text-[16px]'>Best price</p>
                <Icons icon='hugeicons:flash' />
              </div>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              />
            </div>
          </div>
          <div
            className='flex justify-center items-center mb-16'
            data-aos='fade-up'
            data-aos-duration='1600'
          >
            <div className='flex bg-[#010E35] items-center gap-3 rounded-[12px] px-6 py-1'>
              <img src={bnb2} className='w-8 h-8' />{' '}
              <p className='text-lg font-[200] '>Binance Smart Chain</p>
            </div>
          </div>
          <div
            className='bg-[#010E35] rounded-[17px] relative mb-8'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <input className='w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-6 text-xl font-[300] py-4' />
            <div className='absolute flex justify-between gap-2 md:gap-5 items-center top-4 md:top-3 left-3'>
              <p className='md:text-2xl text-xl  '>Est total fees:</p>
              <p className='font-[200] md:text-xl '>$2.98</p>
            </div>
            <div className='absolute flex justify-between items-center top-3 right-3 gap-2 md:gap-4'>
              <Icons
                icon='pepicons-pencil:line-y'
                className='md:text-4xl text-3xl text-white '
              />
              <div className='md:px-2 px-1 py-1 rounded-md flex items-center'>
                <p className='text-xs md:text-[16px]'>Show details</p>
              </div>
              <Icons
                icon='ooui:down-triangle'
                className='md:text-2xl text-xl'
              />
            </div>
          </div>
          <div className='flex justify-center gap-6 items-center'>
            <ConnectWallet
              className='bg-hbtn hover:ring-2 py-3 mb-5 shadow-btns text-center px-20 pl-9 font-bold md:text-xl rounded-[20px] text-white relative'
              imgClassName='md:w-10 md:h-10 w-8 h-8'
            />
            <button
              className='bg-hbtn hover:ring-2 py-3 mb-5 shadow-btns relative text-center px-14 font-bold md:text-xl rounded-[20px] text-white '
              //   data-aos='zoom-in'
              //   data-aos-duration='1000'
              // onClick={handleRewardModalClick}
            >
              Buy
            </button>{' '}
          </div>
          <div className=' ' data-aos='fade-up' data-aos-duration='1200'>
            <p className='text-slate-300 font-[300] text-xl text-center'>
              By continuing you agree to our terms of service
            </p>
            <div className='flex items-center justify-end'>
              <img
                src={reload}
                className='text-right cursor-pointer sm:block hidden -mt-8 w-10'
              />
            </div>
            {/* {modalOpen && <WalletModal onclose={closeWalletModal} />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPHero;
