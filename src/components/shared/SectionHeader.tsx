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
      </div>
    );
  };
  
  export default SectionHeader;
  