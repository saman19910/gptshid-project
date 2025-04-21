import React from "react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "تولید تصویر از متن",
    description: "متن بنویس، عکس بگیر!",
    path: "/image-generator",
  },
  {
    title: "چت هوشمند",
    description: "پاسخ دقیق و سریع به سوالاتت",
    path: "/chat",
  },
  {
    title: "پرامپت‌ساز حرفه‌ای",
    description: "ایده بده، پرامپت بساز",
    path: "/prompt-generator",
  },
  {
    title: "تولید محتوا شبکه‌ اجتماعی",
    description: "پست‌هات رو هوش درست کنه!",
    path: "/content-generator",
  },
  {
    title: "تبلیغات هوشمند",
    description: "کمپین‌ تبلیغاتی با هوش مصنوعی",
    path: "/ads-ai",
  },
  {
    title: "درآمدزایی با تولید محتوا",
    description: "با تولید پرامپت و فایل درآمد داشته باش",
    path: "/earn",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-sky-400">ابزارهای هوش مصنوعی GPTشید</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <Link to={tool.path} key={index} className="bg-slate-800 hover:bg-slate-700 rounded-xl p-6 shadow-md transition duration-300 border border-slate-700">
            <h2 className="text-xl font-semibold mb-2 text-sky-300">{tool.title}</h2>
            <p className="text-gray-300 text-sm">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
