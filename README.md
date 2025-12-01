# 🤖 Whack-a-Robo: System Purge

<div align="center">

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Express.js](https://img.shields.io/badge/Express.js-4+-90C53F?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-13AA52?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**A cyberpunk-themed Whack-a-Mole game where you, a Security Admin, purge bugs and robots from a mainframe system.**

[View Demo](#-gameplay-mechanics) • [Installation](#-getting-started) • [API Reference](#-api-reference)

</div>

---

## 📸 Screenshots

<img width="1033" height="778" alt="image" src="https://github.com/user-attachments/assets/4e21c5ea-b29a-459c-8790-391e6594c5b3" />

| Feature | Preview |
|---------|---------|
| **Main Game Board** | 🖼️ Neon-styled grid with animated holes |
| **Leaderboard** | 🏆 Global high scores with player rankings |
| **HUD & Feedback** | 📊 Real-time score, timer, combo counter |
| **Cyberpunk UI** | ⚡ Scanlines, neon glow effects, terminal vibes |

---

## 📖 About The Project

**Whack-a-Robo: System Purge** is an immersive cyberpunk-themed game that combines classic Whack-a-Mole mechanics with modern web technologies. Step into the role of a Security Admin tasked with purging malicious entities from a mainframe system.

### 🎮 Core Concept

- **Setting**: A digitized mainframe under attack
- **Objective**: Eliminate as many enemies (🤖 robots/bugs) as possible within the time limit
- **Challenge**: Avoid hitting firewall traps (🛡️) and master the combo system for higher scores
- **Twist**: Hunt for the rare Ransomware King (👺) to unlock bonus points and time

### ✨ Unique Features

- **Procedural Audio**: All sound effects are generated in real-time using the Web Audio API—no external audio files
- **Progressive Difficulty**: Game speed increases dynamically as your score climbs
- **Combo Mechanics**: Build streaks to trigger RAMPAGE MODE and double your points
- **Persistent Leaderboard**: Your scores are stored globally and ranked against other players
- **Fully Custom UI**: Cyberpunk aesthetic with neon effects, scanlines, and hacker terminal styling

---

## 🛠️ Built With

### Frontend
- **[React 18+](https://react.dev)** - UI component library
- **[TypeScript 5+](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Vite 5+](https://vitejs.dev)** - Lightning-fast build tool
- **[Tailwind CSS 3+](https://tailwindcss.com)** - Utility-first CSS framework
- **[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** - Sound synthesis

### Backend
- **[Express.js 4+](https://expressjs.com)** - Node.js web framework
- **[Prisma ORM](https://www.prisma.io)** - Database abstraction layer
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** - Cloud MongoDB database
- **[Node.js 18+](https://nodejs.org)** - JavaScript runtime

### Development Tools
- **ESLint** - Code quality and style
- **PostCSS** - CSS transformation
- **Concurrently** - Run multiple processes simultaneously

---

## 🎮 Game Mechanics

### Scoring System

| Entity | Icon | Points | Effect |
|--------|------|--------|--------|
| **Enemy/Bug** | 🤖 | +1 | Basic target |
| **Trap/Firewall** | 🛡️ | -3 | Friendly fire penalty |
| **Ransomware King** | 👺 | +5 | Rare spawn (10% chance) |
| **Ransomware King Bonus** | ⏱️ | — | +5 Seconds added to timer |

### Combo System 🔥

- **Hit Streak**: Eliminate 5 consecutive enemies without missing
- **RAMPAGE MODE**: Triggered on 5-hit combo
- **Multiplier**: All subsequent hits earn **2x points** until combo breaks
- **Reset**: Missing any target resets the combo counter

### Progressive Difficulty 📈

The game dynamically scales in challenge as you progress:

| Score Range | Spawn Rate | Difficulty |
|-------------|-----------|------------|
| 0-20 | 1500ms | 🟢 Easy |
| 21-50 | 1200ms | 🟡 Intermediate |
| 51-100 | 900ms | 🟠 Hard |
| 101+ | 400ms | 🔴 Extreme |

### Special Events

- **Random Spawns**: Enemies appear at random hole positions
- **Firewall Traps**: Strategically placed to challenge your precision
- **Ransomware King Events**: Rare but rewarding encounters (10% chance of spawn)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** 9+ or **yarn** (comes with Node.js)
- **MongoDB Atlas** account ([Create one](https://www.mongodb.com/cloud/atlas))
- **Git** ([Download](https://git-scm.com))

### Installation

#### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd "Final Project PemWeb"
```

#### Step 2: Frontend Setup (Whack-a-Mole)

```bash
cd whack-a-mole
npm install
```

#### Step 3: Backend Setup (Whack-Backend)

```bash
cd ../whack-backend
npm install
```

**Configure Environment Variables:**

Create a `.env` file in the `whack-backend` folder with the following:

```env
# Database Configuration
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database-name>"

# Server Configuration
PORT=3001
NODE_ENV=development
```

Replace `<username>`, `<password>`, `<cluster>`, and `<database-name>` with your MongoDB Atlas credentials.

#### Step 4: Run Both Servers

Terminal 1 - Frontend:
```bash
cd whack-a-mole
npm run dev
```

Terminal 2 - Backend:
```bash
cd whack-backend
npx ts-node index.ts
```

The frontend will typically run on `http://localhost:5173`  
The backend will run on `http://localhost:3001`

---

## 🔌 API Reference

### Base URL
```
http://localhost:3001/api
```

### Endpoints

#### 1. Get All Scores
**GET** `/scores`

Retrieves all high scores from the leaderboard.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "playerName": "SecurityAdmin",
      "score": 145,
      "timestamp": "2025-12-01T10:30:00Z"
    },
    {
      "id": "507f1f77bcf86cd799439012",
      "playerName": "CodeNinja",
      "score": 128,
      "timestamp": "2025-12-01T09:15:00Z"
    }
  ]
}
```

#### 2. Submit Score
**POST** `/scores`

Submits a new score to the leaderboard.

**Request Body:**
```json
{
  "playerName": "SecurityAdmin",
  "score": 145
}
```

**Response:**
```json
{
  "success": true,
  "message": "Score saved successfully",
  "data": {
    "id": "507f1f77bcf86cd799439013",
    "playerName": "SecurityAdmin",
    "score": 145,
    "timestamp": "2025-12-01T10:35:00Z"
  }
}
```

**Status Codes:**
- `200 OK` - Score saved successfully
- `400 Bad Request` - Invalid input (missing playerName or score)
- `500 Internal Server Error` - Database error

---

## 🎵 Sound Synthesis

All audio in Whack-a-Robo is procedurally generated using the **Web Audio API**. The custom `SoundManager` class creates retro 8-bit sound effects on-the-fly without requiring external audio files.

### Features
- ✅ No audio file assets needed
- ✅ Lightweight and performant
- ✅ Authentic retro gaming feel
- ✅ Customizable tone and frequency parameters

### Sound Effects Generated
- **Hit Success**: Ascending beep pattern
- **Miss/Penalty**: Descending beep pattern
- **Combo Triggered**: Chiptune melody
- **Game Over**: Fade-out tone

---

## 📁 Project Structure

```
Final Project PemWeb/
├── .gitignore
├── README.md (This file)
├── whack-a-mole/                 # Frontend Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── GameBoard.tsx     # Main game logic
│   │   │   ├── Hole.tsx          # Individual hole component
│   │   │   └── Home.tsx          # Home/leaderboard view
│   │   ├── utils/
│   │   │   └── SoundManager.ts   # Audio synthesis
│   │   ├── App.tsx               # Root component
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── whack-backend/                # Backend Application
    ├── index.ts                  # Server entry point
    ├── prisma/
    │   └── schema.prisma         # Database schema
    ├── package.json
    └── tsconfig.json
```

---

## 🚦 Development Workflow

### Frontend Development

```bash
# 1. Masuk ke folder frontend
cd whack-a-mole

# 2. Download semua library (React, Tailwind, dll)
npm install

# 3. Nyalakan Website (Port 5173)
npm run dev
```

### Backend Development

```bash
# 1. Masuk ke folder backend
cd whack-backend

# 2. Download semua library (Express, Prisma, dll)
npm install

# 3. PENTING: Buat file .env baru secara manual, isi dengan:
# DATABASE_URL="mongodb+srv://..." (Copy dari catatanmu)

# 4. Generate ulang 'kamus' Prisma (Wajib dilakukan setelah clone)
npx prisma generate

# 5. Nyalakan Server (Port 3000)
npx ts-node index.ts

```

---

## 🔐 Security & Performance

### Best Practices Implemented
- ✅ **Input Validation**: All API inputs are validated before database operations
- ✅ **CORS**: Configured to accept requests from the frontend
- ✅ **Type Safety**: Full TypeScript coverage prevents runtime errors
- ✅ **Database Indexing**: MongoDB indexes on frequently queried fields
- ✅ **Rate Limiting**: (Recommended for production deployment)

### Performance Optimizations
- ✅ **Code Splitting**: Vite automatically splits code for faster loading
- ✅ **Lazy Loading**: React components loaded on-demand
- ✅ **Audio Synthesis**: Minimal processing overhead with efficient Web Audio API usage
- ✅ **Database Queries**: Optimized with Prisma query selection

---

## 🐛 Troubleshooting

### Issue: Backend won't connect to MongoDB

**Solution:**
1. Verify `DATABASE_URL` in `.env` is correct
2. Ensure your IP address is whitelisted in MongoDB Atlas Network Access
3. Check MongoDB cluster status in the Atlas dashboard
4. Test connection string in MongoDB Compass

### Issue: Frontend can't reach backend API

**Solution:**
1. Confirm backend is running on `http://localhost:3001`
2. Check CORS settings in Express configuration
3. Verify network requests in browser DevTools Console
4. Ensure both services are on the same machine or network

### Issue: Audio not playing

**Solution:**
1. Check browser console for audio context errors
2. Ensure user has interacted with the page before audio plays (browser policy)
3. Verify Web Audio API is supported in your browser
4. Test SoundManager initialization in browser console

### Issue: Game is too fast/slow

**Solution:**
1. Adjust spawn rate in `GameBoard.tsx` component
2. Modify difficulty scaling thresholds in game logic
3. Clear browser cache and restart

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- Inspired by classic Whack-a-Mole arcade games
- Cyberpunk aesthetic influenced by retro-futurism design trends
- Web Audio API community for synthesis documentation
- MongoDB Atlas for cloud database infrastructure
- Vite team for the blazing-fast build tool

---

<div align="center">

**Built with ❤️ by Kapten-Kapten IT07**

*Made for the Final Project in Web Programming*

</div>
