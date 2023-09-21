import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { certificates } from '../constants';
import { useState } from 'react';

const CertificateCard = ({ title, name, link, image }) => {
  return (
    <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-white tracking-wider text-[18px] cursor-pointer hover:text-gray-400"
        >
          {title}
        </a>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col ">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient"></span>
              {name}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const [visit, setVisit] = useState(3);

  console.log(visit);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant}>
          <p className={styles.sectionSubText}>This is my</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {certificates.map(
          (cert, idx) =>
            idx < visit && <CertificateCard key={cert.name} {...cert} />
        )}
        {visit < certificates.length && (
          <button onClick={() => setVisit(visit + 3)}>Visit More</button>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, '');
