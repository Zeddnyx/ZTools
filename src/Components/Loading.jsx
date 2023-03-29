export default function Loading() {
  return (
    <section className="animate-pulse">
      <div className="w-full h-60 grid gap-3">
        <div className="flex gap-3">
          <div className="h-8 w-full bg-mainBtn rounded-lg"></div>
          <div className="h-8 w-60  bg-mainBtn rounded-lg"></div>
        </div>
        <div className="grid flex gap-3">
          <div className="h-8 w-full bg-mainBtn rounded-lg"></div>
          <div className="h-8 w-72  bg-mainBtn rounded-lg"></div>
          <div className="h-8 w-full  bg-mainBtn rounded-lg"></div>
        </div>
        <div className="flex gap-3">
          <div className="h-8 w-40 bg-mainBtn rounded-lg"></div>
          <div className="h-8 w-full  bg-mainBtn rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
