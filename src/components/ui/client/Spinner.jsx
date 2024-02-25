import { Hourglass } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Hourglass
      visible={true}
      height="20"
      width="20"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#0891b2', '#22d3ee']}
    />
  );
};
