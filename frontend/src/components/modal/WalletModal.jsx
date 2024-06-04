/* eslint-disable react/prop-types */

import { close } from '../../assets';

const WalletModal = ({ onclose }) => {
  return (
    <div className='fixed backdrop-filter backdrop-blur-md h-full w-full flex items-center justify-center z-[999px] top-0 left-0'>
      <div className='bg-transparent text-white border border-slate-300 rounded-lg p-5 w-1/2'>
        <div className='flex justify-between items-center mb-4'>
          <h5 className='font-bold text-xl'>Connect wallet</h5>
          <img src={close} onClick={onclose} className=' cursor-pointer w-8' />
        </div>
        <p className='text-slate-300 font-[300] w-3/4'>
          Start by connecting with one of the wallets below. Be sure to store
          your private keys or seed phrase securely. Never share them with
          anyone.
        </p>
        <h5 className='font-bold text-xl'>What’s a Web3 Wallet</h5>
        <p className='text-slate-300 font-[300]  '>
          A Web3 Wallet allows you to send and receive crypto assets like
          bitcoin, BNB,ETH,NFTs and much more.
        </p>
      </div>
    </div>
  );
};

export default WalletModal;
