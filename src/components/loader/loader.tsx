import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Rings
      height="200"
      width="200"
      color="#0C0B0B"
      radius="6"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default Loader;
