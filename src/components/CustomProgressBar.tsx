const CustomProgressBar = () => {
  return (
    <div className="relative">
      <div className="w-full h-4 rounded-full bg-gray-200"></div>
      <div
        style={{ width: "90%" }}
        className="absolute top-0 left-0 h-4 rounded-full bg-blue-200"
      ></div>
    </div>
  );
};

export default CustomProgressBar;
