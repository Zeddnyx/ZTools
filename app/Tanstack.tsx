"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Footer from "@/components/Footer";
import Animation from "@/components/Animation";

interface IProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: IProps) {
  return (
    <div>
      <Animation >
        <QueryClientProvider client={queryClient}>
          {children}
          <Footer />
        </QueryClientProvider>
      </Animation >
    </div>
  );
}
