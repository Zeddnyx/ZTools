type TTitle = {
  title: string;
  highlight: string;
  desc?: string;
};

export const Title = ({ title, highlight, desc }: TTitle) => {
  return (
    <div>
      <h1>
        {title} <span className="text-aqua">{highlight}</span>
      </h1>
      <p className="descCenter">{desc}</p>
    </div>
  );
};
