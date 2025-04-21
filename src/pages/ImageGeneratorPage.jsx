import React, { useState } from "react";
import axios from "axios";

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrl("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt: prompt,
          n: 1,
          size: "512x512",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const image = response.data.data[0].url;
      setImageUrl(image);
    } catch (error) {
      console.error("خطا در تولید تصویر:", error);
      alert("مشکلی در تولید تصویر به‌وجود آمد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-sky-400">🎨 تولید تصویر با متن</h1>
      <div className="w-full max-w-xl space-y-4">
        <input
          className="w-full p-3 rounded-xl bg-slate-800 border border-sky-600 text-white focus:outline-none"
          placeholder="مثلاً: یک خانه روی صخره"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={generateImage}
          className="bg-sky-500 hover:bg-sky-600 text-white w-full py-3 rounded-xl font-semibold transition duration-200"
        >
          {loading ? "در حال تولید..." : "تولید کن!"}
        </button>

        {imageUrl && !loading && (
          <div className="mt-8 text-center">
            <h2 className="text-xl mb-4">✅ تصویر تولیدی:</h2>
            <img
              src={imageUrl}
              alt="Generated"
              className="rounded-xl max-w-full border border-sky-700 shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
