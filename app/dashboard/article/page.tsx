import { Title } from "@/components/Title";
import ListArticle from "./ListArticle";

export default function page() {
  return (
    <div className="flexCenterMargin">
      <Title
        title="Article App: For"
        highlight="Frontend Developer"
        desc="Get the latest News about Frontend Developer"
      />
      <ListArticle />
    </div>
  );
}

