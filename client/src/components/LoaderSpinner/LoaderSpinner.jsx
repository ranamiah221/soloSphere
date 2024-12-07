import { Blocks } from 'react-loader-spinner'

const LoaderSpinner = () => {

  return (
    <div className='flex justify-center items-center h-96'>
      <div>
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoaderSpinner;
