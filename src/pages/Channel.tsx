import PageForm from '../components/PageForm';
import { AiOutlinePlaySquare } from 'react-icons/ai';

const Channel = () => {
  return (
    <PageForm
      icon={AiOutlinePlaySquare}
      login='콘텐츠가 없습니다.'
      notlogin='새로운 동영상을 놓치지 마세요.'
      notloginD='즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.'
    />
  );
};

export default Channel;
