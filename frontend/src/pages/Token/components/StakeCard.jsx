import { useState, useEffect } from 'react';
import { Logo, gcal } from '../../../assets';
import Icons from '../../../components/Icon/Icon';
import StakeModal from '../../../components/modal/StakeModal';
import ConnectWallet from '../../../components/Button/ConnectWallet';
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from '@web3modal/ethers5/react';
import { ethers } from 'ethers';
import { toast } from 'sonner';

import StakingContractFile from '../../../abis/Staking.sol/StakingContract.json';
import SeeseaTokenContractFile from '../../../abis/SeeseaToken.sol/SeeseaToken.json';
const StakingContractAddress = '0x499Eb46EF0c1A7Baf7Cf9C25Ba109E4e8091fCf8';
const SeeseaTokenContractAddress = '0x1157d6Fe108924D91f761Bc8367d25Cf599CFa01';
const StakingContractAbi = StakingContractFile.abi;
const SeeseaTokenContractAbi = SeeseaTokenContractFile.abi;

const StakeCard = () => {
  const [val, setVal] = useState('0');
  const [modalOpen2, setModalOpen2] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('30');
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [totalStaked, setTotalStaked] = useState(null);
  const [StakingContract, setStakingContractState] = useState(null);
  const [SeeseaTokenContract, setSeeseaTokenContract] = useState(null);

  const handleSelect = (purpose) => {
    setSelectedPurpose(purpose);
  };

  const handleStakeModalClick = () => {
    setModalOpen2(!modalOpen2);
  };

  const closeStakeModal = () => {
    setModalOpen2(false);
  };

  const handleStake = async (event) => {
    event.preventDefault();
    const amount = val;
    const period = selectedPurpose;

    try {
      await stakeToken(amount, period);
      // Handle successful purchase, e.g., show a success message
    } catch (error) {
      console.error('Contract interaction failed:', error);

      // Handle specific error codes
      if (error.code === ethers.errors.UNPREDICTABLE_GAS_LIMIT) {
        toast.error(
          'Unpredictable gas limit. Transaction may fail or may require a manual gas limit.'
        );
        // console.error('Unpredictable gas limit. Transaction may fail or may require a manual gas limit.');
      } else if (error.code === ethers.errors.CALL_EXCEPTION) {
        // console.error('Call exception. Transaction failed.');
        toast.error('Call exception. Transaction failed');
      } else {
        toast.error('Transaction failed');
        // console.error('An unknown error occurred.');
      }
    }
  };
  async function stakeToken(amount, period) {
    if (!isConnected) throw Error('User disconnected');
    // const ethersProvider = new ethers.providers.Web3Provider(walletProvider)
    // const signer =  ethersProvider.getSigner()

    //   // The Contract object
    //   const StakingContract = new ethers.Contract(StakingContractAddress,StakingContractAbi, signer)
    //   const SeeseaPurchaseContract = new ethers.Contract(SeeseaTokenContractAddress,SeeseaTokenContractAbi, signer)

    const _amount = ethers.utils.parseUnits(amount, 'ether');
    const approveTx = await SeeseaTokenContract.approve(
      StakingContractAddress,
      _amount
    );
    await approveTx.wait();

    const tx = await StakingContract.stakeTokens(_amount, period);
    let receipt = await tx.wait();

    if (receipt.status === 1) {
      toast.success(`Staking successful for ${period} days`);
    } else {
      toast.error('Transaction failed');
      // console.error('Transaction failed:', receipt);
    }
  }
  useEffect(() => {
    if (isConnected) {
      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();

      // The Contract object
      const StakingContractState = new ethers.Contract(
        StakingContractAddress,
        StakingContractAbi,
        signer
      );
      const SeeseaPurchaseContractState = new ethers.Contract(
        SeeseaTokenContractAddress,
        SeeseaTokenContractAbi,
        signer
      );

      setStakingContractState(StakingContractState);
      setSeeseaTokenContract(SeeseaPurchaseContractState);

      const fetchTotalStaked = async () => {
        const amount = await StakingContract.totalStakedToken();
        const total = ethers.utils.formatUnits(amount, 18);
        setTotalStaked(total);
      };
      fetchTotalStaked();
    }
  }, [isConnected]);

  return (
    <div>
      <div className="bg-cards1  hover:ring-2 text-white p-6 flex lg:flex-row flex-col lg:items-center justify-between rounded-[12px] mb-5 cursor-pointer shadow-cards1">
        <div className="flex flex-col lg:items-center">
          <img src={Logo} className="w-fit rounded-full" />
          <p className="font-semibold mt-1">SSAI</p>
          <p className="font-[300]">STAKE&EARN</p>
        </div>
        <div className="lg:w-[20%] w-full lg:my-0 my-7">
          <p className="font-semibold text-xl mb-2">Stake periods:</p>
          <div className="flex gap-2 mb-2">
            <button
              className={`rounded-md lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '30'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('30')}
            >
              30D
            </button>{' '}
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '60'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('60')}
            >
              60D
            </button>
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '90'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('90')}
            >
              90D
            </button>{' '}
          </div>
          <div className="flex gap-2 mb-2">
            {' '}
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '180'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('180')}
            >
              180D
            </button>
            <button
              className={`rounded-md lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '360'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('360')}
            >
              360D
            </button>
            <button
              className={`rounded-md  lg:w-fit w-full  p-1 px-3 text-sm text-gray6 ${
                selectedPurpose === '720d'
                  ? 'bg-hbtn text-white '
                  : 'bg-transparent border border-slate-300 text-slate-300'
              }`}
              onClick={() => handleSelect('720')}
            >
              720D
            </button>{' '}
          </div>
          <div className="flex items-center gap-2">
            <img
              src={gcal}
              className="w-5 h-5"
              onClick={handleStakeModalClick}
            />
            <p className="text-[12px] text-slate-300">APR: 0.8%~0.10%</p>
          </div>
        </div>
        {isConnected ? (
          <div className="lg:w-[20%] w-full lg:mb-0 mb-9 lg:text-center">
            <p className="font-semibold text-xl mb-1">Total Staked:</p>
            <p className="font[300] text-slate-200">
              {' '}
              {totalStaked !== null ? `${totalStaked} SSAI` : 'Loading...'}
            </p>
            <p className="text-slate-300 font-[200]">
              {' '}
              {totalStaked !== null ? `~$${totalStaked * 0.05} ` : 'Loading...'}
            </p>
          </div>
        ) : null}

        <div className="lg:w-[25%] w-full flex flex-col justify-center lg:items-center">
          <ConnectWallet
            className="bg-hbtn w-full hover:ring-2 py-2 shadow-btns  text-center px-14 pl-5 font-bold md:text-lg rounded-[20px] text-white "
            imgClassName="md:w-6 md:h-6 w-8 h-8"
          />{' '}
          <input
            className="w-full bg-[#010E35] rounded-[17px] hover:ring-2 outline-none px-3 md:px-6 text-xl font-[300] py-4 mt-4"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            onClick={handleStake}
            className="bg-hbtn2 mt-4 hover:ring-2 py-2 w-full shadow-btns text-center px-14 font-bold md:text-lg rounded-[20px] text-white "
            //   data-aos='zoom-in'
            //   data-aos-duration='1000'
          >
            Stake
          </button>
          <p className="flex items-center gap-2 cursor-pointer text-slate-300 mt-3">
            Details{' '}
            <span>
              {' '}
              <Icons
                icon="ooui:down-triangle"
                className="md:text-xl text-white text-xl"
              />
            </span>
          </p>
        </div>
      </div>
      {modalOpen2 && <StakeModal onclose={closeStakeModal} />}
    </div>
  );
};

export default StakeCard;
