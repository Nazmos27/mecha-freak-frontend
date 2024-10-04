
const Loading = () => {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-5xl font-bold flex items-end justify-center">
          L{" "}
          <div className="h-8 w-8 rounded-full border-4 border-blue-500 animate-spin border-dashed"></div>
          ading...
        </div>
      </div>
    );
  };
  
  export default Loading;
  