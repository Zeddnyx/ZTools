import { MenuTop } from "@/components/Notes/MenuTop";
import { useRouter} from "next/router";

export default function page() {
  const router = useRouter();
  console.log(router.query.slug);

  return <div>page {router.query.slug}</div>;
}
