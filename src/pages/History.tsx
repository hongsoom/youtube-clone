import PageForm from '../components/PageForm';
import { VscAccount } from 'react-icons/vsc';

const History = () => {
  return (
    <PageForm
      icon={VscAccount}
      login='아직 시청한 동영상이 없습니다.'
      notlogin='시청한 동영상을 확인하세요.'
      notloginD='시청한 동영상을 확인하려면 로그인하세요.'
    />
  );
};

console.log(VscAccount);

export default History;
