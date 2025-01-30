import { Link } from "react-router-dom";

const BicycleCard = () => {
  return (
    <a
      href="#"
      className="relative block rounded-tr-3xl border border-gray-100"
    >
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-4 py-2 font-medium uppercase text-xs tracking-widest text-white">
        Out of Stock
      </span>

      <img
        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-80 w-full rounded-tr-3xl object-cover"
      />

      <div className="">
        <div className="p-4 md:p-6 border-b border-x-gray-500/30">
          <div className="flex justify-start items-center gap-1">
            <span className="inline-block w-4 h-[1px] bg-gray-500/45"></span>
            <p className="text-gray-700 font-inter font-normal text-xs uppercase ">
              Category
            </p>
          </div>
          <h2 className="font-orbitron font-bold text-lg md:text-xl uppercase mt-2 text-secondary hover:text-primary">
            Lorem, ipsum.
          </h2>
        </div>
        {/* Detgails */}
        <div className="p-4 md:p-6">
          <div>
            <p>
              <span className="font-inter font-normal text-sm text-gray-700">
                Brand:
              </span>{" "}
              <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                Sadi Brand
              </span>
            </p>
            <p>
              <span className="font-inter font-normal text-sm text-gray-700">
                Model:
              </span>{" "}
              <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                Sadi Brand
              </span>
            </p>
          </div>
          <h2 className="text-lg md:text-xl mt-3 font-sans">
            <span className="">Price</span>{" "}
            <span className="font-bold">100BDT</span>
          </h2>
        </div>

        <Link to="/bicycle/sasdasfd">
          <button className="font-orbitron w-full mt-4 block rounded-md border border-primary bg-primary px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-primary">
            View Details
          </button>
        </Link>
      </div>
    </a>
  );
};

export default BicycleCard;
