import Aurora from "./Aurora/Aurora";


const FullPageAurora = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden">
      <Aurora />
    </div>
  );
};

export default FullPageAurora;
