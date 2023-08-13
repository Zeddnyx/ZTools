"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Animation from "@/components/Animation";
import Navbar from "@/components/Navbar";

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
          <Navbar />
          {children}
        </QueryClientProvider>
      </Animation >
    </div>
  );
}
