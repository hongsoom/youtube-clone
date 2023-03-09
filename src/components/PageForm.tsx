import { ButtonWrap } from '../style/Layout';
import { FormType } from '../types/types';
import GoogleButton from './common/GoogleBtn';

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
            <GoogleButton />
          </>
        )}
      </ButtonWrap>
    </>
  );
};

export default PageForm;
