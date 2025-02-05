export default function BlogSkeleton() {
  return (
    <div className="mt-4 w-full">
      <div className="relative p-4 w-full bg-black overflow-hidden shadow hover:shadow-md rounded-lg">
        <div className="animate-pulse flex flex-col">
          <div className="rounded w-full h-52 bg-gray-900"></div>
          <div className="flex flex-col mt-5">
            <div className="w-full h-10 bg-gray-900 rounded"></div>
            <div className="mt-2 w-full h-10 bg-gray-900 rounded"></div>
            <div className="mt-2 w-full h-10 bg-gray-900 rounded"></div>
            <div className="mt-2 w-full h-10 bg-gray-900 rounded"></div>
            <div className="mt-2 w-full h-10 bg-gray-900 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
