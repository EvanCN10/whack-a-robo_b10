import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Home from "./components/Home";

function App() {
  const [view, setView] = useState<'home' | 'game'>('home');

  return (
    <div className="min-h-screen w-full bg-slate-950 relative flex flex-col justify-center items-center font-['Fredoka'] text-slate-200 overflow-hidden selection:bg-green-500 selection:text-black">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Efek Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] pointer-events-none"></div>

      {/* --- LOGIKA PERPINDAHAN HALAMAN --- */}
      {view === 'home' ? (
        <Home onStart={() => setView('game')} />
      ) : (
        <>
          {/* PERBAIKAN TOMBOL KEMBALI (FIXED POSITION) */}
          <button 
            onClick={() => setView('home')}
            className="fixed top-6 left-6 z-50 group flex items-center gap-3 px-5 py-3 
            bg-slate-900/80 border border-red-500/50 text-red-400 font-mono text-xs tracking-widest uppercase rounded-sm backdrop-blur-sm
            hover:bg-red-500 hover:text-black hover:border-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">«</span> 
            ABORT_MISSION // RETURN
          </button>
          
          <GameBoard />
        </>
      )}
      
      {/* Footer */}
      <p className="fixed bottom-4 text-slate-600 text-[10px] font-mono opacity-50 z-10 pointer-events-none">
        SECURE_CONNECTION_ESTABLISHED | PORT: 3000
      </p>
    </div>
  )
}

export default App;