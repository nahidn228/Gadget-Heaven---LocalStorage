import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="border-2 bg-white/30 backdrop-blur-xl rounded-3xl md:w-3/4 mx-auto p-4 transition hover:scale-105 ">
      <img className="w-full  " src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
