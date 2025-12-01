// index.ts
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// --- MIDDLEWARE ---
app.use(express.json()); // Supaya server bisa baca data JSON
app.use(cors()); // Supaya Frontend (Port 5173) boleh masuk

// --- ROUTES (Daftar Menu API) ---

// 1. GET: Ambil Top 10 High Score
app.get('/api/scores', async (req, res) => {
  try {
    const scores = await prisma.score.findMany({
      orderBy: { value: 'desc' }, // Urutkan dari terbesar ke terkecil
      take: 10, // Cuma ambil 10 besar
    });
    res.json(scores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengambil data score" });
  }
});

// 2. POST: Simpan Skor Baru
app.post('/api/scores', async (req, res) => {
  const { value } = req.body;
  
  // Validasi: Kalau skornya gak jelas, tolak.
  if (value === undefined || value === null) {
     return res.status(400).json({ error: "Skor harus diisi" });
  }

  try {
    const newScore = await prisma.score.create({
      data: {
        value: Number(value), // Pastikan jadi angka
      },
    });
    console.log(`✅ Skor baru tersimpan: ${value}`);
    res.json(newScore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal menyimpan score" });
  }
});

// --- JALANKAN SERVER ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`
  🚀 Server Backend SIAP!
  -----------------------
  URL: http://localhost:${PORT}
  Database: Terkoneksi ke MongoDB Atlas
  `);
});