import { ButtonWrap } from '../style/Layout';
import { LoginBtn, Profile } from '../style/Buuton';
import { GOOGLE_AUTH_URL } from '../shared/OAuth';
import { FormType } from '../types/types';

const PageForm = ({ icon, login, notlogin, notloginD }: FormType) => {
  const hash = sessionStorage.getItem('hash');

  return (
    <>
      <ButtonWrap>
        {hash ? (
          <h1>{login}</h1>
        ) : (
          <>
            <h1>{notlogin}</h1>
            <p>{notloginD}</p>
            <LoginBtn onClick={GOOGLE_AUTH_URL}>
              <Profile />
              로그인
            </LoginBtn>
          </>
        )}
      </ButtonWrap>
    </>
  );
};

export default PageForm;
