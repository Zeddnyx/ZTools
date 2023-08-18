import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";

export const ButtonBack = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/dashboard/notes");
  };
  return (
    <div className="flex w-full" onClick={handleBack}>
      <button>
        <BiArrowBack />
      </button>
    </div>
  );
};
