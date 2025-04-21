import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("gptshid-user"));

  const handleLogout = () => {
    localStorage.removeItem("gptshid-user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">سلام {user?.name || "کاربر"} 👋</h1>
        <p className="text-lg text-zinc-300 mb-6">به داشبورد GPTShid خوش اومدی</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button onClick={() => navigate("/content")} className="bg-zinc-800 hover:bg-zinc-700 text-white p-6 rounded-xl text-lg">
            ✍️ تولید محتوا
          </Button>
          <Button onClick={() => navigate("/image")} className="bg-zinc-800 hover:bg-zinc-700 text-white p-6 rounded-xl text-lg">
            🎨 تولید تصویر
          </Button>
          <Button onClick={() => navigate("/consult")} className="bg-zinc-800 hover:bg-zinc-700 text-white p-6 rounded-xl text-lg">
            💬 مشاوره هوشمند
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">خروج</Button>
        </div>
      </div>
    </div>
  );
}
