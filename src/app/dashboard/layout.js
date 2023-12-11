import { Inter } from "next/font/google";

import Header from "../ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Next.js - Dashboard",
  description: "Dashboard for the parallel routes!",
};

export default function DashboardLayout({ children, growth, revenue }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-slate-100 p-2 mr-4 mb-4 rounded-md border border-gray-300">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="bg-slate-100 p-2 mr-4 mb-4 rounded-md border border-gray-300">
          {growth}
        </div>
        <div className="bg-slate-100 p-2 mr-4 mb-4 rounded-md border border-gray-300">
          {revenue}
        </div>
      </div>
    </div>
  );
}
