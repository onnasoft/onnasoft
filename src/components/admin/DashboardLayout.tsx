"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  readonly children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-1 pt-16">
        <Sidebar />

        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden opacity-0 pointer-events-none transition-opacity duration-300"></div>

        <main className="lg:ml-64 p-6 flex flex-1">{children}</main>
      </div>
    </div>
  );
}
