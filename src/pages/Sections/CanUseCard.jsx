const CanUseCard = ({ heading, title }) => {
  return (
    <div className="bg-[#233748] py-4 px-5 rounded-md hover:shadow-md hover:shadow-cyan-300 transition-all duration-300 cursor-pointer max-w-sm">
      <h3 className="font-semibold mb-3 text-white text-xl">{heading} </h3>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

export default CanUseCard;
