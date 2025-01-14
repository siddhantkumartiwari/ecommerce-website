import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="shadow-2xl px-2 bg-gray-100 rounded-xl">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-5 mt-20 text-sm pt-4">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis
            labore, corporis eius sit facilis?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-414-555-9999</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
