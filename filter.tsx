import React, { useState } from "react";
import BicycleCard from "../../components/Bicycle/BicycleCard";
import Loader from "../../components/Loader/Loader";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";
import {
  useGetAllBicycleQuery,
  useGetSpecificBicycleFieldsQuery,
} from "../../redux/features/bicycle/bicycle.api";
import { TProduct, TQueryParams } from "../../types/bicycle.types";
import { BicycleBrand, BicycleCategory } from "../../constant/global.constant";

const Bicycles = () => {
  // const [selectValue, setSelectValue] = useState({
  //   model: "",
  //   brand: "",
  //   category: "",
  //   availability: "",
  // });
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const {
    data: bicycleData,
    isLoading,
    isFetching,
  } = useGetAllBicycleQuery(params);
  const { data: specificField } = useGetSpecificBicycleFieldsQuery(undefined);
  console.log(specificField?.data);
  // Handle Filter
  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setSelectValue({
    //   ...selectValue,
    //   [e.target.name]: e.target.value,
    // });
    const paramsData: TQueryParams[] = [];
    if (e.target) {
      paramsData.push({ name: e.target.name, value: e.target.value });

      setParams((prevParams) => {
        const updateParams = prevParams ? [...prevParams] : [];
        updateParams.push(...paramsData);
        return updateParams;
      });
    }

    // console.log(selectValue);
  };
  if (isLoading || isFetching) {
    return <Loader />;
  }
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
          <div className=" max-w-full  mx-auto gap-4 mb-5">
            <div className="flex flex-col gap-3 justify-center items-center">
              {/* Search */}
              <div className="flex flex-row gap-3">
                <div className="flex gap-1">
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

                <div className="flex gap-2">
                  <div>
                    <input
                      type="text"
                      id="minPrice"
                      name="minPrice"
                      placeholder="Min Pice"
                      className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-2 px-3 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="maxPrice"
                      name="maxPrice"
                      placeholder="Max Pice"
                      className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-2 px-3 outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* Filter */}
              <div className="">
                <form className="flex space-x-2">
                  {/* Model */}
                  <select
                    name="model"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Model
                    </option>
                    {specificField?.data?.map((item: TProduct) => (
                      <option key={item?._id} value={item?.model}>
                        {item?.model}
                      </option>
                    ))}
                  </select>
                  {/* Brand */}
                  <select
                    name="brand"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Brand
                    </option>
                    {BicycleBrand?.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* Category */}
                  <select
                    name="category"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Category
                    </option>
                    {BicycleCategory?.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {/* availability */}
                  <select
                    name="availability"
                    onChange={handleChangeFilter}
                    id=""
                    className="focus:outline-none focus:border focus:border-primary p-2"
                  >
                    <option disabled selected>
                      Filter By Availability
                    </option>
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out Of Stock</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
            {bicycleData?.data?.map((item: TProduct) => (
              <BicycleCard key={item._id} item={item} />
            ))}
          </div>
        </MySection>
      </MyContainer>
    </div>
  );
};

export default Bicycles;
