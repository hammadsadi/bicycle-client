import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";

const BiCycleDetails = () => {
  return (
    <MyContainer>
      <MySection>
        <div className="">
          <div className="">
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1 p-4">
                <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 p-4 border rounded">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  Product Name
                </h2>
                <p className="text-secondary text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt.
                </p>

                <div className="flex mb-4">
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
                    <p>
                      <span className="font-inter font-normal text-sm text-gray-700">
                        Category:
                      </span>{" "}
                      <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                        Sadi Brand
                      </span>
                    </p>
                    <p>
                      <span className="font-inter font-normal text-sm text-gray-700">
                        Availability:
                      </span>{" "}
                      <span className="text-secondary text-sm font-inter font-semibold hover:text-primary">
                        In Stock
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="text-lg md:mr-4 md:text-2xl">
                    <span className="font-bold text-secondary">Price:</span>
                    <span className="text-secondary"> 29BDT</span>
                  </div>
                </div>
                <div className="flex -mx-2 mb-4">
                  <div className="w-1/2 px-2">
                    <button className="w-full bg-primary text-white py-2 px-4 rounded-full font-bold">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MySection>
    </MyContainer>
  );
};

export default BiCycleDetails;
