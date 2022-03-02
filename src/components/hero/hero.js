import rocket from "../../assets/rocket.jpeg";
const Hero = () => {
  return (
    <div className="h-28 w-full flex items-center align-middle justify-center gap-5">
      <img src={rocket} alt="" className="h-28 inline" />
      <h1 className="font-bold text-red-600 text-4xl text-center align-middle tracking-wider">
        Support Center
      </h1>
    </div>
  );
};

export default Hero;
