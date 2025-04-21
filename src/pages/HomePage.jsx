// فایل اصلی برای شروع پروژه gptshid

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-400">GPTShid</h1>
        <p className="text-lg text-zinc-300 mt-2">
          تولید محتوای هوشمند، پرامپت طلایی، مشاوره، تبلیغات، پاسخ‌دهی خودکار و بیشتر!
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid grid-cols-3 bg-zinc-800 rounded-xl p-1">
            <TabsTrigger value="content">تولید محتوا</TabsTrigger>
            <TabsTrigger value="image">تولید تصویر</TabsTrigger>
            <TabsTrigger value="consult">مشاوره</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card className="bg-zinc-800 mt-4">
              <CardContent className="p-4 space-y-4">
                <Input placeholder="موضوع محتوا را وارد کنید..." className="text-black" />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">تولید محتوا</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="image">
            <Card className="bg-zinc-800 mt-4">
              <CardContent className="p-4 space-y-4">
                <Input placeholder="توضیح تصویر را بنویسید..." className="text-black" />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">تولید تصویر</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consult">
            <Card className="bg-zinc-800 mt-4">
              <CardContent className="p-4 space-y-4">
                <Input placeholder="سؤال خود را وارد کنید..." className="text-black" />
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">دریافت پاسخ</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
