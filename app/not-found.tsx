import Link from "next/link";

export default function Error() {
  return (
    <div className="flexCenterMargin">
      <h2 className="text-red">The page you visit is not found</h2>
      <button>
        <Link href={"/dashboard"}>back to home</Link>
      </button>
    </div>
  );
}
