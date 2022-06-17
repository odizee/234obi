import Image from 'next/image';
import styles from './pagestyles/home.module.scss';
import labourparty from '../assets/labourparty.png';
import ProgressBar from './../components/misc/Progress';
import States from '../components/States/Index';
import SupportGroups from '../components/SupportGroups/Index';

const homepage = () => {
  const done = 13;

  return (
    <div className={styles.homepage}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.hero__top}>
            <div className={styles.hero__details}>
              <h2>23 votes for</h2>
              <h1>Peter Obi</h1>
              <p>
                The goal is to deliver at least{' '}
                <span>23 votes per village </span>
                within each state and with your help and the help of your loved
                ones, we can do this
              </p>
            </div>
            <div className={styles.hero__img}>
              <Image src={labourparty} />
            </div>
          </div>
          <div className={styles.hero__bottom}>
            <h5>OUR PROGRESS SO FAR</h5>
            <ProgressBar done={done} bgColor="#E4FFEC" pgColor="#018226" />
            <div className={styles.percent}>
              <h5>{done}%</h5>
              <h5>100%</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.states}>
        <States />
      </div>
      <div className={styles.support_groups}>
        <SupportGroups />
      </div>
    </div>
  );
};

export default homepage;
