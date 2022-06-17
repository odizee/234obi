import State from '../components/State/Index';
import { useRouter } from 'next/router';

const state = () => {
  const router = useRouter();
  const { state } = router.query;

  return <State id={state} />;
};

export default state;
