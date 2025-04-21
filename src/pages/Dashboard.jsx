import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white">
      <h1 className="text-3xl font-bold mb-6">داشبورد GPTشید</h1>
      <div className="space-y-4">
        <Link to="/image-generator" className="block bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded text-white font-semibold">
          تولید تصویر با متن
        </Link>
      </div>
    </div>
  );
}
