import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      to={`/ecommerce-website/product/${id}`}
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
    >
      <div className="flex flex-col bg-gray-100">
        {/* Image */}
        <div className="relative">
          <img
            src={image[0]}
            alt={name}
            className="h-56 w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="p-4 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="flex justify-between items-center mt-4">
            {/* Price */}
            <p className="text-md font-bold text-green-600">
              {currency} {price}
            </p>

            {/* View Details */}
            <button className="text-sm text-blue-600 hover:underline">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);
//   return (
//     <Link
//       to={`/ecommerce-website/product/${id}`}
//       className=" p-2 rounded-[10px] shadow-xl hover:shadow-2xl overflow-hidden bg-gray-100 z-20"
//     >
//       <div className="overflow-hidden">
//         <div>
//           <img
//             src={image[0]}
//             alt="img"
//             className="transition-transform duration-300 ease-in-out transform hover:scale-105"
//           />
//         </div>
//         <div className="md:h-[15vh] flex flex-col justify-between ">
//           <p className="my-2 text-xl font-semibold  text-black">{name}</p>
//           <p className="text-green-500 text-lg font-bold">
//             {currency} {price}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

export default ProductItem;
