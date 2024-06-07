import { useState } from 'react';
import Icons from '../../../components/Icon/Icon';

/* eslint-disable react/prop-types */
const Accordion = ({
  title,
  children,
  accordionIndex,
  openAccordionIndex,
  setOpenAccordionIndex,
}) => {
  const handleToggle = () => {
    setOpenAccordionIndex(
      openAccordionIndex === accordionIndex ? -1 : accordionIndex
    );
  };

  return (
    <div className=''>
      <div
        className='flex  cursor-pointer items-center gap-6 p-4'
        style={
          {
            //   backgroundColor: openAccordionIndex === accordionIndex ? 'grey' : '',
          }
        }
        onClick={handleToggle}
      >
        {openAccordionIndex === accordionIndex ? (
          <Icons icon='lucide:chevron-up' className='text-3xl' color='#fff' />
        ) : (
          <Icons icon='lucide:chevron-down' className='text-3xl' color='#fff' />
        )}
        <p className='font-semibold text-xl'>{title}</p>
      </div>
      {openAccordionIndex === accordionIndex && (
        <div className=' text-slate-300 p-4 pl-14'>{children}</div>
      )}
    </div>
  );
};
const Faq = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
  return (
    <section className=' px-5 md:px-20 text-white'>
      <div className='md:px-12 p-5 shadow-btns rounded-xl bg-[#FFFFFF1A] mb-20'>
        <h4 className='font-bold text-2xl mb-5'>Common Problem</h4>
        <Accordion
          title='1. Website Purpose: '
          accordionIndex={0}
          openAccordionIndex={openAccordionIndex}
          setOpenAccordionIndex={setOpenAccordionIndex}
        >
          <p className=''>
            The website serves as a comprehensive platform for users to engage
            with digital assets, providing access to various financial services
            and opportunities.
          </p>
        </Accordion>
        <Accordion
          title='2. What is EGC Token? '
          accordionIndex={1}
          openAccordionIndex={openAccordionIndex}
          setOpenAccordionIndex={setOpenAccordionIndex}
        >
          <div className=''>
            <p>
              EGC tokens can be obtained through several methods, including
              purchasing on supported exchanges, participating in token sales,
              or earning through various platform activities and incentives.
            </p>
            <div className='flex justify-end'>
              {' '}
              <button
                className='bg-hbtn hover:ring-2 shadow-btns py-3 text-center w-[250px] mt-7 rounded-[20px] text-white relative'
                data-aos='zoom-in'
                data-aos-duration='1000'
              >
                Buy now{' '}
              </button>{' '}
            </div>
          </div>
        </Accordion>
        <Accordion
          title='3. What is EGC Token? '
          accordionIndex={2}
          openAccordionIndex={openAccordionIndex}
          setOpenAccordionIndex={setOpenAccordionIndex}
        >
          <div className=''>
            <p>
              EGC tokens can be obtained through several methods, including
              purchasing on supported exchanges, participating in token sales,
              or earning through various platform activities and incentives.
            </p>
            <div className='flex justify-end'>
              {' '}
              <button
                className='bg-hbtn hover:ring-2 shadow-btns py-3 text-center w-[250px] mt-7 rounded-[20px] text-white relative'
                data-aos='zoom-in'
                data-aos-duration='1000'
              >
                Buy now{' '}
              </button>{' '}
            </div>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
