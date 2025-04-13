function TechCard({ icon, name }) {
  return (
    <div
      className="bg-neutral-200 
      p-5 
      w-[80px]  2xl:w-[60%] 
      h-[80px] 2xl:h-20 
      rounded-xl 
      flex flex-col xl:flex-row 
      items-center justify-center 2xl:justify-start
      mx-5 md:my-5
      shadow-lg hover:shadow-xl 
      transition-shadow duration-300 ease-in-out
    "
    >
      <div className="text-violet-600 bg-neutral-100 rounded-full min-w-[40px]  h-[40px] flex justify-center items-center text-base md:text-lg">
        {icon}
      </div>
      <p className="mt-2 xl:mt-0 xl:ml-5 font-semibold text-lg hidden 2xl:block">
        {name}
      </p>
    </div>
  );
}
export { TechCard };
