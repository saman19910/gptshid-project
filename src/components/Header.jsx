import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">GPTشید</Link>
      <nav className="flex gap-4 text-sm">
        <Link to="/">خانه</Link>
        <Link to="/dashboard">ابزارها</Link>
        <Link to="/about">درباره ما</Link>
        <Link to="/login" className="bg-sky-500 px-4 py-1 rounded">ورود / ثبت‌نام</Link>
      </nav>
    </header>
  );
}
