import { FiCreditCard, FiHeadphones, FiHeart, FiSearch, FiShoppingCart, FiTruck } from "react-icons/fi";
import icon1 from '../../../../assets/images/Icons/delivery.png'
import icon2 from '../../../../assets/images/Icons/24-hours-support 1.png'
import icon3 from '../../../../assets/images/Icons/cashback 1.png'
import icon4 from '../../../../assets/images/Icons/premium-quality 1.png'

const Feattures = () => {

    const features = [
        {
          icon: <img src={icon1} alt="delivery" className="mx-auto" />,
          title: "Free Delivery",
          desc: "Enjoy free delivery on all orders above a certain amount. No hidden fees or charges."
        },
        {
          icon: <img src={icon3} alt="cashback" className="mx-auto" />,
          title: "Cashback Rewards",
          desc: "Earn cashback rewards on every purchase you make. Redeem them for discounts or gifts."
        },
        {
          icon: <img src={icon4} alt="premium quality" className="mx-auto" />,
          title: "Premium Quality",
          desc: "Shop with confidence knowing that our products are of premium quality and meet high standards."
        },
        {
          icon: <img src={icon2} alt="support" className="mx-auto" />,
          title: "24/7 Support",
          desc: "Get in touch with our friendly and helpful support team anytime, anywhere. We are always ready to assist you."
        },
      ];
    
      
    return (
        <section >

            <h1 className="text-4xl text-[#151875] font-bold my-10 text-center">What StyleSpot Offer!</h1>


            <div className="grid lg:grid-cols-4 mx-auto gap-5 justify-center  ">


            {
                features.map ((feature) => {

                    return (

                        <div className=" max-w-sm py-5 shadow-md text-center align-text-bottom  rounded-xl">
                          {feature.icon}

                            <p className="text-[#151875] text-xl font-bold">{feature.title}</p>
                            <p style={{color : 'rgba(26, 11, 91, 0.30)'}} className="p-6 ">{feature.desc}</p>



                        </div>
                    )
                })
            }
            </div>
        
    </section>
    );
};

export default Feattures;