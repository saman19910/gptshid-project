import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Card className="w-full max-w-md bg-zinc-900">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400">ورود به GPTShid</h2>
          <Input placeholder="ایمیل یا شماره موبایل" className="text-black" />
          <Input type="password" placeholder="رمز عبور" className="text-black" />
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">ورود</Button>
          <p className="text-sm text-zinc-400">
            حساب ندارید؟ <Link to="/register" className="text-yellow-400">ثبت‌نام کنید</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
