/* eslint-disable react/prop-types */
import { useState } from 'react';
import { btnspan } from '../../assets';
import WalletModal from '../modal/WalletModal';

const ConnectWallet = ({ className, imgClassName }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleWalletModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const closeWalletModal = () => {
    setModalOpen(false);
  };
  return (
    <button
      className={className}
      //   data-aos='zoom-in'
      onClick={handleWalletModalClick}
      //   data-aos-duration='1000'
    >
      <>
        Connect wallet
        <span className='absolute right-4 top-2'>
          <img src={btnspan} className={imgClassName} />
        </span>
      </>
      {modalOpen && <WalletModal onclose={closeWalletModal} />}
    </button>
  );
};

export default ConnectWallet;
