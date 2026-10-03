import Loading from "../../public/loading.svg";
const LoaderSvg = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-full h-full" src={Loading} />
    </div>
  );
};

export default LoaderSvg;
