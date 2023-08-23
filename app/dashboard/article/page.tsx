"use client";

export default function page() {
  const data: any = [];
  fetch("http://localhost:3000/api/dev/article"
  ).then((res) => {
    if (res.ok) {
      console.log(res);
      data.push(res);
    }
    else {
      console.log(res);
    }
  });
  return (
    <div className="flexCenterMarin">
      page
    </div>
  );
}
