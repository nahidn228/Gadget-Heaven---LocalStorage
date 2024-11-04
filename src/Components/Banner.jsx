import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="border-x-2 border-b-2 rounded-b-xl mb-80">
      <div className=" bg-[#9538E2] lg:pb-40 mx-2 mb-2  rounded-b-xl text-white">
        <div className="flex flex-col items-center text-center w-full md:w-2/3 mx-auto space-y-6 py-12">
          <h1 className="text-5xl">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>

          <p className="text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn text-[#9538E2] text-lg transition hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>

      <div className="border-2 bg-white/30 backdrop-blur-xl rounded-3xl md:w-4/6 mx-auto p-4 md:absolute md:left-52 md:-bottom-72 ">
        <img className="w-full mx-auto" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
