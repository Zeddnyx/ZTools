"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

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
      </QueryClientProvider>
    </div>
  );
}
