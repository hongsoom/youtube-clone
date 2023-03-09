import PageForm from '../components/PageForm';
import { MdOutlineVideoLibrary } from 'react-icons/md';

const Storage = () => {
  return (
    <PageForm
      icon={MdOutlineVideoLibrary}
      login='아직 좋아하는 동영상이 없습니다.'
      notlogin='좋아하는 동영상을 감상해 보세요.'
      notloginD='저장하거나 좋아요 표시한 동영상을 보려면 로그인하세요.'
    />
  );
};

export default Storage;
