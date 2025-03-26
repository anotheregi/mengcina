// components/CardSkeleton.js
export default function CardSkeleton() {
  return (
    <div className="card-skeleton">
      <div className="image-placeholder"></div>
      <div className="content-placeholder">
        <div className="title-placeholder"></div>
        <div className="meta-placeholder"></div>
      </div>
    </div>
  );
}