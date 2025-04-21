import React from "react";  // باید React رو ایمپورت کنیم
import AuthForm from "./components/AuthForm";  // این خط کامپوننت AuthForm رو از فایل دیگر ایمپورت می‌کنه

function App() {
  return (
    <div className="App">
      <AuthForm /> {/* اینجا کامپوننت AuthForm رو استفاده می‌کنیم */}
    </div>
  );
}

export default App;  // در آخر App رو صادر می‌کنیم
