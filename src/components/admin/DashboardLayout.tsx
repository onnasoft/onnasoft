"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  readonly children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex pt-16">
        <Sidebar />

        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden opacity-0 pointer-events-none transition-opacity duration-300"></div>

        <main className="flex-1 lg:ml-64 p-6">{children}</main>
      </div>
    </div>
  );
}
