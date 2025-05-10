import { TrolleyIcon } from "@sanity/icons";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-16 w-16 relative">
        <div className="absolute inset-0">
          <div className="h-full w-full animate-spin border-4 border-blue-600 border-t-transparent rounded-full" />
        </div>
        <TrolleyIcon className="text-blue-600 size-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default Loader;
