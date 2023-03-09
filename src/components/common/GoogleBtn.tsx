import GoogleLogin from 'react-google-login';

const GoogleButton = () => {
  const CLIENT_ID: string = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;

  const onSuccess = (response: any) => {
    console.log(response);
  };

  const onFailure = (response: any) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText='구글로 계속하기'
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};
export default GoogleButton;
