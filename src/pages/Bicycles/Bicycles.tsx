import BicycleCard from "../../components/Bicycle/BicycleCard";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";

const Bicycles = () => {
  return (
    <div>
      {/* Small Banner */}
      <div className="bg-primary/25 flex flex-col justify-center items-center h-32 md:h-60 space-y-1">
        <h2 className="text-lg font-orbitron font-bold md:text-3xl">
          Our Bicycles
        </h2>
        <p>
          Home - <span>Bicycles</span>
        </p>
      </div>

      <MyContainer>
        <MySection>
          <div className="flex justify-center items-center max-w-sm  mx-auto gap-4 mb-5">
            {/* Search */}
            <div className="flex">
              <input
                type="email"
                id="Email"
                name="email"
                placeholder="Search..."
                className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-2 px-3 outline-none"
              />
              <button className="bg-primary py-1 px-3 rounded-md">
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
            {/* Filter */}
            <div className="">
              <select
                name=""
                id=""
                className="focus:outline-none focus:border focus:border-primary p-2"
              >
                <option value="">Name</option>
                <option value="">Sadi</option>
                <option value="">Sunamganj</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
            <BicycleCard />
            <BicycleCard />
            <BicycleCard />
            <BicycleCard />
            <BicycleCard />
          </div>
        </MySection>
      </MyContainer>
    </div>
  );
};

export default Bicycles;
