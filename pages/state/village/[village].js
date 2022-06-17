import Village from '../../../components/Village/Index';
import { useRouter } from 'next/router';

const village = () => {
  const router = useRouter();
  const { village } = router.query;

  return <Village id={village} />;
};

export default village;
