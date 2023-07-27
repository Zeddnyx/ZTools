import Link from 'next/link';

export default function Error() {
  return (
    <div className="capitalize flexCenterMargin">
    <h2>Error page not found</h2>
    <Link href={"/"}>back to home</Link>
    </div>
  );
}

