import React, { useState, useEffect } from "react";

interface HoleProps {
  isActive: boolean;
  type: 'enemy' | 'trap' | 'golden';
  onClick: () => void;
}

const Hole: React.FC<HoleProps> = ({ isActive, type, onClick }) => {
  const [status, setStatus] = useState<'idle' | 'hit' | 'wrong'>('idle');
  
  // STATE BARU: Menyimpan data teks melayang
  const [floatText, setFloatText] = useState<{ val: string, color: string } | null>(null);

  useEffect(() => {
    if (!isActive) {
      setStatus('idle');
      // Jangan reset floatText disini biar animasinya gak kepotong tiba-tiba
    }
  }, [isActive]);

  const handleClick = () => {
    if (isActive && status === 'idle') {
      
      // LOGIKA MENENTUKAN TEKS & WARNA
      let text = "";
      let colorClass = "";

      if (type === 'golden') {
        text = "+5";
        colorClass = "text-yellow-400 text-5xl drop-shadow-[0_0_10px_rgba(250,204,21,1)]"; // Emas Besar
        setStatus('hit');
        setTimeout(() => onClick(), 150);
      } else if (type === 'enemy') {
        text = "+1";
        colorClass = "text-green-400 text-4xl drop-shadow-[0_0_10px_rgba(74,222,128,1)]"; // Hijau
        setStatus('hit');
        setTimeout(() => onClick(), 150);
      } else {
        text = "-3";
        colorClass = "text-red-500 text-4xl drop-shadow-[0_0_10px_rgba(239,68,68,1)]"; // Merah
        setStatus('wrong');
        setTimeout(() => onClick(), 300);
      }

      // TAMPILKAN TEKS TERBANG
      setFloatText({ val: text, color: colorClass });

      // Hapus teks setelah animasi selesai (800ms)
      setTimeout(() => {
        setFloatText(null);
      }, 800);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative w-24 h-24 sm:w-32 sm:h-32 rounded-full 
        flex justify-center items-center cursor-pointer select-none
        transition-all duration-200 border-4
        
        ${isActive && type === 'trap' ? "border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.5)]" 
          : isActive && type === 'golden' ? "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.8)] scale-110" 
          : isActive ? "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]" 
          : "border-slate-700 bg-slate-900 shadow-inner"}
        bg-slate-900
      `}
    >
      <div className="absolute inset-2 rounded-full border border-slate-700 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-slate-800 to-black opacity-80"></div>

      {/* --- FLOATING TEXT (FITUR KE-2) --- */}
      {floatText && (
        <span className={`animate-float ${floatText.color}`}>
          {floatText.val}
        </span>
      )}

      {/* --- VISUAL TIKUS/ITEM --- */}
      <div className="z-10 text-6xl sm:text-7xl flex justify-center items-center">
        
        {status === 'hit' && (
          <span className="animate-hit filter drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            {type === 'golden' ? '💰' : '💥'} 
          </span>
        )}

        {status === 'wrong' && (
          <span className="animate-hit text-red-500 filter drop-shadow-[0_0_15px_rgba(239,68,68,1)] font-bold text-4xl">
            ERROR
          </span>
        )}

        {status === 'idle' && isActive && (
          type === 'golden' ? (
            <span className="animate-pop robot-glow cursor-pointer filter drop-shadow-[0_0_15px_rgba(250,204,21,1)]">
              👺
            </span>
          ) : type === 'trap' ? (
            <span className="animate-pop filter drop-shadow-[0_0_10px_rgba(249,115,22,0.6)] cursor-pointer">
              🛡️
            </span>
          ) : (
            <span className="animate-pop robot-glow cursor-pointer">
              🤖
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Hole;