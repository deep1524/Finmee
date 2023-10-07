import React, { } from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import Hero from "../Hero/Hero";
import { useNavigate } from "react-router-dom";
import mine from "../Image/Mine.jpg"
import mineral from "../Image/Mineral.jpg"
import sustainability from "../Image/Sustainability.jpg"
import oil from "../Image/oil_gase.png"
const About = () => {
  const navigate=useNavigate();
  const Oil_Gas=()=>{
    navigate("/Oil_Gas");
  }
  const Sustainability=()=>{
    navigate("/Sustainability");
  }
  const Mineral=()=>{
    navigate("/Mineral");
  };
  const Mine=()=>{
    navigate("/Mine");
  };
  return (
    <div className="w-full ">
      <Navbar />
      <Hero/>
      {/* 1st section  */}
      <div className="bg-white py-36 sm:py-28 -mt-40 ">
        <div className="mx-auto max-w-full px-6 lg:px-24">
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mt-8">
              <p className=" text-4xl mb-4 text-red-600 font-bold">
                Mine-To-Mill-To-Mine Optimization
              </p>
              <p className="font-normal">
                NTWIST’s newest product unlocks up to $250/oz in previously
                inaccessible value in open pit gold mines by connecting siloed
                data sources like block models, fleet management systems,
                stockpile surveys, and plant instruments. This allows your
                company to better track material flow, and feed properties,
                identify plan/production discrepancies, and correct resource
                models and production plans.
              </p>
              <button onClick={Mine} className=" mt-5 rounded-md bg-red-700 p-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                Read More
              </button>
            </div>
            <div className="card-body bg-white">
              <figure>
                <img
                  src={mine}
                  alt="Mine"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="bg-white py-36 sm:py-32 -mt-72">
        <div className="mx-auto max-w-full px-6 lg:px-24">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card-body bg-white">
              <figure>
                <img
                  src={sustainability}
                  alt="Sustainability"
                />
              </figure>
            </div>
            <div className="mt-8">
              <p className=" text-4xl mb-4 text-red-600 font-bold">
                Sustainability
              </p>
              <p className="font-normal">
                Environmental stewardship is a priority for NTWIST. We help our
                customers to minimize their sustainability impact on the planet.
                Emissions or environmental targets are used alongside
                productivity targets to define success for our customers.
              </p>
              <p className="font-normal mt-2">
                With the increasing relevance of carbon accounting and emissions
                tracking, NTWIST offers a suite of tools to increase visibility
                into environmental performance and help processing plants track,
                manage, optimize, and report key metrics.
              </p>
              <button onClick={Sustainability} on className=" mt-5 rounded-md bg-red-700 p-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section */}

      <div className="bg-white py-36 sm:py-32 -mt-72">
        <div className="mx-auto max-w-full px-6 lg:px-24">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="mt-8">
              <p className=" text-4xl mb-4 text-red-600 font-bold">
                Mineral Processing
              </p>
              <p className="font-normal">
                NTWIST offers a number of solutions for mills, concentrators,
                and leach plants. Our solutions help operations to reduce the
                effect of feed variability, avoid downtime and increase peak
                throughput while decreasing energy and reagent consumption.
              </p>
              <button onClick={Mineral} className=" mt-5 rounded-md bg-red-700 p-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                Read More
              </button>
            </div>
            <div className="card-body bg-white">
              <figure>
                <img
                  src={mineral}
                  alt="Mineral Processing"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* 4rd section */}
      <div className="bg-white py-36 sm:py-32 -mt-72 -mb-12">
        <div className="mx-auto max-w-full px-6 lg:px-24">
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t rounded-lg  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card-body bg-white">
              <figure>
                <img
                  src={oil}
                  alt="oil"
                />
              </figure>
            </div>
            <div>
              <p className=" text-4xl mb-4 text-red-600 font-bold">Oil & Gas</p>
              <p className="font-normal">
                Oil and Gas plants require a high level of control and
                robustness in their operation due to the high risks to people
                and environment.
              </p>
              <p className="mt-4 font-normal">
                NTWIST helps Oil & Gas customers to analyze historical data,
                identify opportunities for process control improvements, and
                reduce variability in any part of the process, thus providing
                enhanced reliability and safety.
              </p>

              <button onClick={Oil_Gas} className=" mt-5 rounded-md bg-red-700 p-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
