import PriceOption from "../PriceOption/PriceOption";
const priceOptions =  [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30.99,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to locker rooms and showers"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to all equipment including specialized machines",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Discounts on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Platinum Membership",
            "price": 79.99,
            "features": [
                "All features of Premium Membership",
                "Access to swimming pool",
                "Access to indoor track",
                "Free personal training sessions (limited)"
            ]
        }
    ]

const PriceOptions = () => {
   

    return (
        <div>
            <h1 className="text-2xl font-bold text-center ">Best Prices for you desired gym</h1> 
            <div className="grid grid-cols-3 m-9 gap-3">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;