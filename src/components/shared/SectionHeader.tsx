const SectionHeader = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    return (
      <div className="text-center">
        <h2 className="text-3xl text-[#247674] font-semibold">{title}</h2>
        <p className="lg:w-2/3  mx-auto">{description}</p>
        <hr className="border-1 border-black my-3 rounded-md"/>
      </div>
    );
  };
  
  export default SectionHeader;
  