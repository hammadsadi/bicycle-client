import React from "react";

const About = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <p className="font-normal text-sm leading-3 text-secondary hover:text-primary cursor-pointer pb-2">
          About
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 text-primary leading-9">
              We are here to make great design accessible and delightfull for
              everyone
            </h2>
            <p className="font-normal text-base leading-6 text-secondary mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire,
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="lg:block hidden w-full"
              src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full"
              src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
              alt="people discussing on board"
            />
          </div>
        </div>

        <div className="relative mt-24">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-primary rounded-full flex justify-center items-center">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
                alt="flag"
              />
            </div>

            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
            />

            <img
              className="z-20 sm:block hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="users"
            />
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
              Founded
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
              50M montly enrichments
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="sm:block hidden">
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
              400k User
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="sm:hidden block relative mt-8">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="user"
            />
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">
              400k User
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">
              Our Mission
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/12 mt-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <img
                    className="mr-6"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg"
                    alt="team card"
                  />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
                    Team
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>

              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg"
                    alt="board card"
                  />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
                    Board
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>

              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg"
                    alt="press card"
                  />
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
                    Press
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
