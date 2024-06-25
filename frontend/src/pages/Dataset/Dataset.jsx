import { useState } from 'react';
import ComingSoon from '../../components/modal/ComingSoon';
import DSCards from './components/DSCards';
import DSHero from './components/DSHero';

const Dataset = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleComingSoonModalClick = () => {
    setModalOpen(!modalOpen);
  };

  const closeComingSoonModal = () => {
    setModalOpen(false);
  };

  const first_array = [
    'smart heat meters',
    'hourly data',
    'residential buildings',
    'energy consumption',
    'Danish homes',
    'smart home technology',
    'energy usage analysis',
    'heating patterns',
    'residential energy data',
    'three-year dataset',
    'building energy efficiency',
    'smart metering',
    'HVAC systems',
    'energy monitoring',
  ];

  const second_array = [
    'medical imaging',
    'annotated dataset',
    'X-rays',
    'MRIs',
    'CT scans',
    'ultrasounds',
    'healthcare research',
    'diagnostic algorithms',
    'machine learning',
    'medical conditions',
    'image analysis',
    'patient data',
    'healthcare technology',
    'annotated medical images',
    'medical datasets',
    'imaging modalities',
  ];

  const third_array = [
    'traffic flow',
    'urban traffic',
    'road sensors',
    'transportation planning',
    'intelligent transportation systems',
    'vehicle counts',
    'speed measurements',
    'hourly traffic data',
    'traffic management',
    'European cities',
  ];

  return (
    <div>
      <DSHero handleComingSoonModalClick={handleComingSoonModalClick} />
      <div className='mb-20'>
        {modalOpen && <ComingSoon onclose={closeComingSoonModal} />}

        <DSCards
          code_name='Three years of hourly data from 3021 smart heat meters installed in Danish residential buildings'
          description='This dataset includes three years of cleaned hourly data from 3021 commercial smart heat meters installed in Danish residential buildings. The data are screened, interpolated to be equidistant'
          arrays={first_array}
        />
        <DSCards
          code_name='Five Years of Annotated Medical Images from 1500 Patients Across Various Imaging Modalities'
          description='Five Years of Annotated Medical Images from 1500 Patients Across Various Imaging Modalities is a comprehensive dataset containing meticulously labeled images collected over a five-year period. The dataset includes diverse imaging modalities such as X-rays, MRIs, CT scans, and ultrasounds, sourced from 1500 patients. '
          arrays={second_array}
        />
        <DSCards
          code_name='Three Years of Hourly Traffic Flow Data from 1500 Road Sensors in European Urban Areas'
          description='Three Years of Hourly Traffic Flow Data from 1500 Road Sensors in European Urban Areas is a detailed dataset that provides traffic flow information collected from 1500 road sensors installed across various urban areas in Europe. Spanning three years, the dataset includes hourly traffic counts, vehicle classifications, and speed measurements. Each data point is supplemented with contextual information such as location, weather conditions, and time of day. This dataset is ideal for research in traffic flow analysis, urban traffic management, transportation planning, and the development of intelligent transportation systems.; '
          arrays={third_array}
        />
      </div>
    </div>
  );
};

export default Dataset;
