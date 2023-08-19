import Link from "next/link";

export default function Error() {
  return (
    <div className="flexCenterMargin">
      <h2 className="text-red">Error page not found x_x</h2>
      <button>
        <Link href={"/dashboard"}>back to home</Link>
      </button>
    </div>
  );
}
