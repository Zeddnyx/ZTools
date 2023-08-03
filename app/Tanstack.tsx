"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Footer from "@/components/Footer";

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
      <QueryClientProvider client={queryClient}>
        {children}
        <Footer />
      </QueryClientProvider>
    </div>
  );
}
