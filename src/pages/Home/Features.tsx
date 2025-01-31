import { Link } from "react-router-dom";
import FeaturesBicycleItem from "../../components/Home/FeaturesBicycleItem";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import MySection from "../../components/Shared/MySection/MySection";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";

const Features = () => {
  return (
    <>
      <MyContainer>
        <MySection>
          <SectionHeading title="Our Features" subTitle="Key benefits" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
            <FeaturesBicycleItem />
            <FeaturesBicycleItem />
            <FeaturesBicycleItem />
            <FeaturesBicycleItem />
            <FeaturesBicycleItem />
            <FeaturesBicycleItem />
          </div>
          <div className="mt-2 flex justify-center items-center md:mt-4">
            <Link
              to="/bicycles"
              className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            >
              View All
            </Link>
          </div>
        </MySection>
      </MyContainer>
    </>
  );
};

export default Features;
