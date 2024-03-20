import PropTypes from 'prop-types'; 
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Feature = ({feature}) => {
  return (
    <div className='flex gap-2'>
      <IoCheckmarkCircleOutline className='text-black text-2xl'></IoCheckmarkCircleOutline>
      <p className='text-2xl mb-3'>{feature}</p>
    </div>
  );
};

Feature.propType = {
  feature: PropTypes.string
}

export default Feature;