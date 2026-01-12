import React from "react";
import { Settings, BookOpen, ShieldCheck, LayoutDashboard } from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-slate-200 p-6 hidden md:flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <Settings className="text-blue-600 w-8 h-8" />
        <span className="font-extrabold text-2xl text-slate-900">Sistemas V</span>
      </div>

      {/* Menú */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setActiveTab("tutorial")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-left
            ${activeTab === "tutorial" ? "bg-blue-50 text-blue-700 shadow" : "hover:bg-slate-100 text-slate-600"}`}
        >
          <BookOpen size={20} />
          Tutorial Teórico
        </button>

        <button
          onClick={() => setActiveTab("auditoria")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-left
            ${activeTab === "auditoria" ? "bg-blue-50 text-blue-700 shadow" : "hover:bg-slate-100 text-slate-600"}`}
        >
          <ShieldCheck size={20} />
          Herramienta Auditoría
        </button>

        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-left
            ${activeTab === "dashboard" ? "bg-blue-50 text-blue-700 shadow" : "hover:bg-slate-100 text-slate-600"}`}
        >
          <LayoutDashboard size={20} />
          Gestión Mantenimiento
        </button>
      </div>

      {/* Footer / versión pequeña */}
      <div className="mt-auto text-slate-400 text-sm text-center pt-6 border-t border-slate-200">
        v1.0 | Sistemas V
      </div>
    </nav>
  );
};

export default Sidebar;
