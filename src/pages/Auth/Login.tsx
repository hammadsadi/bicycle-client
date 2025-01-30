import MyButton from "../../components/Shared/MyButton/MyButton";
import MyContainer from "../../components/Shared/MyContainer/MyContainer";
import loginImage from "../../assets/images/loginimage.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <MyContainer>
      <section className="bg-white flex justify-center items-center h-screen">
        <div className="flex gap-2 flex-row">
          <article className="w-1/2 relative overflow-hidden hidden md:block rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={loginImage}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-white/90"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </article>
          <main className="border border-overlyBg rounded-md md:w-1/2 flex flex-col items-center justify-center px-8 py-8 sm:px-12 ">
            <h2 className="font-bold text-2xl lg:text-3xl mb-5">
              Login Your Account
            </h2>
            <div className="w-full">
              <form action="#" className="space-y-2">
                <div className="w-full">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-secondary"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-secondary"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="w-full rounded-md border border-overlyBg focus:border-primary bg-overlyBg focus:bg-white transition-all py-3 px-4 outline-none"
                  />
                </div>
                <div className=" sm:flex sm:items-center">
                  <MyButton title="sign in" />
                </div>
              </form>
              <p className="text-xs text-center mt-3 text-secondary">
                Dont Have an Account ?{" "}
                <Link
                  to="/sign-up"
                  className="font-semibold hover:underline text-primary"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </main>
        </div>
      </section>
    </MyContainer>
  );
};

export default Login;
