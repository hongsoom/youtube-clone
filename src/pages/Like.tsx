import PageForm from "../components/PageForm";
import { AiOutlineLike } from "react-icons/ai";

const Like = () => {
    return (
        <PageForm
            icon={AiOutlineLike}
            login="좋아요 표시한 동영상이 없습니다."
            notlogin="좋아요 표시한 동영상을 확인하세요."
            notloginD="좋아요 표시한 동영상을 확인하려면 로그인하세요." />
    )
}


export default Like;