import MainLayout from "@/layout/MainLayout";
import LevelPage from "@/pages/LevelPage";
import MainPage from "@/pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/level" element={<LevelPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routers;
