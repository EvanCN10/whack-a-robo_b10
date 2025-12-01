// src/components/Home.tsx
import React, { useEffect, useState } from "react";

interface Score {
  id: string;
  value: number;
  createdAt: string;
}

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/scores")
      .then((res) => res.json())
      .then((data) => {
        setScores(data);
        setLoading(false);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 font-mono">
      
      {/* --- HERO SECTION (TERMINAL STYLE) --- */}
      <div className="text-center mb-12 w-full">
        <div className="inline-block border border-green-500/30 bg-black/50 p-6 rounded-lg backdrop-blur-sm relative overflow-hidden group">
            {/* Efek Garis Scan Berjalan */}
            <div className="absolute inset-0 bg-green-500/5 animate-pulse pointer-events-none"></div>
            
            {/* PERBAIKAN DI SINI: Menggunakan &gt; sebagai pengganti > */}
            <p className="text-green-500 text-sm mb-2 tracking-widest text-left typing-effect">
              &gt; SYSTEM_INIT... SUCCESS <br/>
              &gt; TARGET_DETECTED: ROGUE_ROBOTS <br/>
              &gt; STATUS: <span className="text-red-500 animate-pulse font-bold">CRITICAL</span>
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)] mb-2 mt-4">
              WHACK A ROBO
            </h1>
            <p className="text-slate-400 text-lg tracking-widest uppercase border-t border-green-500/30 pt-4 mt-4">
              [ DEFENSE SYSTEM PROTOCOL V.1.0 ]
            </p>
        </div>
      </div>

      {/* --- MAIN ACTION BUTTON --- */}
      <div className="mb-16 relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
        <button
          onClick={onStart}
          className="relative bg-black border-2 border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-bold text-2xl py-4 px-16 rounded-lg 
          shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] 
          transition-all duration-200 tracking-[0.2em] uppercase"
        >
          &gt; INITIALIZE_GAME_
        </button>
      </div>

      {/* --- LEADERBOARD (DATA SERVER STYLE) --- */}
      <div className="w-full max-w-xl bg-black border border-green-800/50 rounded-lg p-1 shadow-2xl relative overflow-hidden">
        {/* Header Terminal */}
        <div className="bg-slate-900/80 px-4 py-2 flex justify-between items-center border-b border-green-900">
          <span className="text-xs text-slate-500">server_log: /var/log/top_agents</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
        </div>

        <div className="p-6 bg-slate-950/90 relative">
            <h2 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2 border-b border-green-500/20 pb-2">
              <span className="animate-pulse">_</span> TOP AGENTS RANKING
            </h2>

            {loading ? (
              <div className="flex flex-col items-center py-8 gap-4">
                <div className="text-green-500 font-mono text-sm animate-pulse">
                  DOWNLOADING DATA PACKETS...
                </div>
                {/* Loader bar sederhana */}
                <div className="w-48 h-1 bg-green-900 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 animate-[width_1s_ease-in-out_infinite] w-1/2"></div>
                </div>
              </div>
            ) : scores.length === 0 ? (
              <div className="text-center py-8 text-slate-600 font-mono text-sm">
                {/* PERBAIKAN DI SINI JUGA */}
                &gt; NO_DATA_FOUND <br/>
                &gt; BE_THE_FIRST_LEGEND_
              </div>
            ) : (
              <table className="w-full text-left font-mono text-sm">
                <thead className="text-slate-500 border-b border-slate-800">
                  <tr>
                    <th className="pb-2">RANK</th>
                    <th className="pb-2">BUGS_FIXED</th>
                    <th className="pb-2 text-right">TIMESTAMP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50 text-slate-300">
                  {scores.map((score, index) => (
                    <tr key={score.id} className="hover:bg-green-500/10 transition-colors group">
                      <td className="py-3 pl-2">
                        {index === 0 ? <span className="text-yellow-400 font-bold">COMMANDER [1]</span> :
                         index === 1 ? <span className="text-slate-300 font-bold">OFFICER [2]</span> :
                         index === 2 ? <span className="text-orange-400 font-bold">RECRUIT [3]</span> :
                         <span className="text-slate-600">User_{index + 1}</span>}
                      </td>
                      <td className="py-3 font-bold text-cyan-400 group-hover:text-cyan-300">
                        {score.value} <span className="text-[10px] text-slate-600">pts</span>
                      </td>
                      <td className="py-3 text-right text-slate-600 text-xs">
                        {new Date(score.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;