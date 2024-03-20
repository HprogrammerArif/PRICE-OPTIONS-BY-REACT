import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  console.log(option);
  const { features, id, name, price } = option;

  return (
    <div className="bg-blue-700 text-white p-5 rounded-lg flex flex-col">
      <h2>
        <span className="text-6xl font-semibold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-4xl my-5 text-green-400">{name}</h4>
      
      
      <div className="ml-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>

      
      <button className="mt-12 bg-green-500 w-full py-3 rounded-2xl font-bold text-2xl hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propType = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
