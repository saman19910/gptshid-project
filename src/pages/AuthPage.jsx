import React, { useState } from "react";

function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  const t = {
    fa: {
      login: "ورود",
      register: "ثبت‌نام",
      email: "ایمیل",
      password: "رمز عبور",
      name: "نام کامل",
      switch: isRegister ? "حساب دارید؟ وارد شوید" : "حساب ندارید؟ ثبت‌نام کنید",
      submit: isRegister ? "ثبت‌نام" : "ورود",
    },
    en: {
      login: "Login",
      register: "Sign Up",
      email: "Email",
      password: "Password",
      name: "Full Name",
      switch: isRegister ? "Already have an account? Login" : "Don't have an account? Sign up",
      submit: isRegister ? "Sign Up" : "Login",
    },
  };

  const labels = t["fa"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white px-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-sky-400 mb-6">
          {isRegister ? labels.register : labels.login}
        </h2>

        {isRegister && (
          <input
            type="text"
            placeholder={labels.name}
            className="w-full mb-4 p-3 rounded bg-slate-700 placeholder-gray-400 text-white"
          />
        )}
        <input
          type="email"
          placeholder={labels.email}
          className="w-full mb-4 p-3 rounded bg-slate-700 placeholder-gray-400 text-white"
        />
        <input
          type="password"
          placeholder={labels.password}
          className="w-full mb-6 p-3 rounded bg-slate-700 placeholder-gray-400 text-white"
        />

        <button className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded text-white font-semibold mb-4">
          {labels.submit}
        </button>

        <p
          onClick={() => setIsRegister(!isRegister)}
          className="text-center text-sky-300 hover:underline cursor-pointer text-sm"
        >
          {labels.switch}
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
