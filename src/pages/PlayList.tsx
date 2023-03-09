import PageForm from '../components/PageForm';
import { AiOutlineClockCircle } from 'react-icons/ai';

const PlayList = () => {
  return (
    <PageForm
      icon={AiOutlineClockCircle}
      login='아직 재생목록에 동영상이 없습니다.'
      notlogin='재생목록을 확인하세요.'
      notloginD='재생목록을 확인하려면 로그인하세요.'
    />
  );
};

export default PlayList;
