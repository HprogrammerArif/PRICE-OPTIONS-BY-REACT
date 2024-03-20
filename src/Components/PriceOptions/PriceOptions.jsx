import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const price_options = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to cardio and weightlifting equipment",
        "Locker room access",
        "Free weights area",
        "Access to online workout videos",
        "Discounts on merchandise",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: "$49.99/month",
      features: [
        "All features of Basic Membership",
        "Access to group fitness classes (yoga, Zumba, etc.)",
        "Sauna and steam room access",
        "Towel service",
        "Personalized workout plans",
        "Access to protein shakes bar",
      ],
    },
    {
      id: 3,
      name: "VIP Membership",
      price: "$79.99/month",
      features: [
        "All features of Premium Membership",
        "Access to personal trainer sessions (2 sessions/month)",
        "Nutritional counseling",
        "Priority booking for classes and equipment",
        "Complimentary gym bag",
        "Exclusive VIP events",
      ],
    },
  ];

  return <div>
    <h2 className="text-5xl">Best Price In The Town</h2>
         {
          price_options.map((option) => <PriceOption option={option} key={option.id}></PriceOption>)
         }
     </div>;
};

export default PriceOptions;
