import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Total = () => {
    const [cart] = useCart();
     // reduce !
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="sticky z-40 bg-white md:mb-56 lg: mb-[400px] top-0">
             <SectionTitle
                    heading="WANNA ADD MORE?"
                    subHeading="My Cart"
                />
            <div className="uppercase font-semibold flex flex-col md:flex-row justify-between items-center md:items-center mb-11 md:h-auto">
                <h3 className="text-2xl md:mb-0 mb-2"> Total Items: {cart.length}</h3>
                <h3 className="text-2xl md:mb-0 mb-2"> Total Price: ${total.toFixed(2)}</h3>
                <button className="text-lg btn-sm btn bg-[#D1A054] border-[#D1A054]">Pay</button>
            </div>

    
        </div>
    );
};

export default Total;