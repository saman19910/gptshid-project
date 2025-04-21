import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export default function ContentGenerator() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return alert("لطفاً موضوع وارد کنید");
    setLoading(true);
    try {
      // اتصال به OpenAI - فرضاً لوکال یا سرور داخلی بزودی جایگزین می‌کنیم
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_API_KEY_HERE`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: `در مورد "${topic}" یک متن حرفه‌ای بنویس.` }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      setResult(data.choices[0].message.content);
    } catch (err) {
      alert("خطا در دریافت پاسخ از GPT");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Card className="max-w-3xl mx-auto bg-zinc-900">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400">📝 تولید محتوای هوشمند</h2>
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="مثلاً: مزایای هوش مصنوعی در کسب‌وکار"
            className="text-black"
          />
          <Button onClick={handleGenerate} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
            {loading ? <Loader2 className="animate-spin" /> : "تولید محتوا"}
          </Button>

          {result && (
            <Textarea className="bg-zinc-800 text-white mt-4 h-60" readOnly value={result} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
