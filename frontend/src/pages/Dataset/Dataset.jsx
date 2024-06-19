import DSCards from './components/DSCards';
import DSHero from './components/DSHero';

const Dataset = () => {
  return (
    <div>
      <DSHero />
      <div className='mb-20'>
        <DSCards />
        <DSCards />
        <DSCards />
        <DSCards />
      </div>
    </div>
  );
};

export default Dataset;
