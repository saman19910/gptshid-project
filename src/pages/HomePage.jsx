import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import FeatureCard from "../components/FeatureCard";

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-white">
      <Header />
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">هوش ایرانی، قدرت جهانی!</h1>
        <p className="text-lg mb-6">پلتفرم هوش مصنوعی با اصالت شاهانه</p>
        <a href="/login" className="bg-sky-500 px-6 py-3 rounded-lg">ثبت‌نام – شروع رایگان</a>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 py-10">
        <FeatureCard title="تولید محتوا" />
        <FeatureCard title="پرامپت‌ساز" />
        <FeatureCard title="عکس از متن" />
        <FeatureCard title="درآمدزایی" />
      </section>

      <section className="px-10 py-10 bg-slate-800">
        <h2 className="text-2xl font-bold mb-6">ابزارهای ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ToolCard title="چت با GPT" link="/chat" />
          <ToolCard title="تولید تصویر" link="/image-generator" />
          <ToolCard title="داشبورد درآمد" link="/dashboard" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
