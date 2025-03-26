export default function CardSkeleton() {
  return (
    <div className="card-skeleton animate-pulse">
      <div className="image-placeholder bg-gray-200 rounded-t-lg w-full h-48"></div>
      <div className="content-placeholder p-4">
        <div className="title-placeholder bg-gray-200 h-5 w-3/4 rounded mb-2"></div>
        <div className="meta-placeholder bg-gray-200 h-4 w-1/2 rounded"></div>
      </div>
    </div>
  );
}