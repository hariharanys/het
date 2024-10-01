import SplashPng from "../../assets/Images/SplashScreen.png";

const SplashScreen = () => {
  return (
    <div className="SplashScreen">
      <div className="w-full h-full flex flex-row items-center justify-center gap-4">
        <img src={SplashPng} alt="Load Again" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default SplashScreen;
