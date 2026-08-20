# 📋 Portfolio — Pending Updates

Things to fill in with real data before deploying.

---

## 🔴 Critical (Do First)

### 1. Resume PDF
- Add your actual resume file to: `public/Resume.pdf`
- The "DOWNLOAD CV" button in the Contact section already points to `/Resume.pdf`
- Just drop the file in the `public/` folder and it will work

### 2. Project GitHub Repo URLs
All 4 projects currently link to your main profile. Update each one in:
`src/data/projects.ts`

| Project | Field | Replace with |
|---|---|---|
| AI Document Summarizer | `githubUrl` | actual repo URL |
| Smart Face Attendance | `githubUrl` | actual repo URL |
| Interactive 3D Studio | `githubUrl` | actual repo URL |
| Jarvis AI Voice Agent | `githubUrl` | actual repo URL |

---

## 🟡 Important

### 3. Certification Links
All certs have `link: "#"` — update in `src/components/sections/Certifications.tsx`

| Cert | Replace `link: "#"` with |
|---|---|
| Networking & Cybersecurity (Cisco / IIPC) | certificate URL or LinkedIn cert link |
| Machine Learning (NPTEL / Coursera) | certificate URL |
| Basic OOPs with Java (Infosys / NPTEL) | certificate URL |
| Cybersecurity Fundamentals (IBM / Coursera) | certificate URL |

### 4. GitHub & LeetCode Stats Numbers
Update real numbers in `src/components/sections/GithubStats.tsx`

| Stat | Current (placeholder) | Update to |
|---|---|---|
| Public Repos | `20+` | your actual count |
| GitHub Stars | `50+` | your actual count |
| LeetCode Solved | `100+` | your actual count |
| LeetCode Rating | `1400+` | your actual rating |

Also update your LeetCode profile URL (currently `#`):
```
href="https://leetcode.com/"  →  href="https://leetcode.com/u/YOUR_USERNAME/"
```

### 5. Projects — Real Content
The 4 project descriptions are AI-generated placeholders. Replace with real details:
- `overview`, `problem`, `approach`, `result` in `src/data/projects.ts`
- Project images (currently Unsplash) — replace with real screenshots if you have them

---

## 🟢 Nice to Have

### 6. Internship — More Details
Only 1 real internship added (Cisco IIPC). If you complete more internships, add to:
`src/components/sections/Internships.tsx`

### 7. Academics — Verify Data
Check these are correct in `src/components/sections/Academics.tsx`:
- CGPA: `8.5 / 10` ✓ or update
- 12th Percentage: `81%` ✓ or update
- Specialization: `Artificial Intelligence & Machine Learning` ✓ or update

### 8. Key Courses
Update the list in `src/components/sections/Academics.tsx` to match your actual semester subjects.

### 9. About Section Bio
Review and edit your bio text in `src/components/sections/About.tsx`

### 10. Social Links
Verify these are correct everywhere they appear:
- GitHub: `https://github.com/mishraji018` ✅
- LinkedIn: check the URL is correct (has unicode chars) ✅
- Email: `pmishra2084@gmail.com` ✅

---

## 🚀 Before Deploying

- [ ] Add `public/Resume.pdf`
- [ ] Update all 4 project `githubUrl` values
- [ ] Add real certification links
- [ ] Update GitHub/LeetCode real stats
- [ ] Run `npm run build` — verify 0 errors
- [ ] Deploy to Vercel / Netlify

---

## 👔 Recruiter-Specific Additions

Things recruiters specifically look for that are currently missing:

### A. Hero / Status Section
- [ ] Add your **location** clearly — e.g. "Noida, India · Open to Remote"
- [ ] Change status badge from "AVAILABLE FOR PROJECTS" to **"OPEN TO INTERNSHIPS"** or **"OPEN TO INTERNSHIPS · 2026"** (more recruiter-friendly)
- [ ] Add **expected graduation year** — "B.Tech 2028 · 2nd Year"

### B. About Section
- [ ] Add **CGPA prominently** — `8.5 / 10` is a strong number, show it
- [ ] Mention **domain interest** clearly — e.g. "Interested in: AI/ML · Full Stack · Python Backend"
- [ ] Add **what type of opportunities** you're looking for:
  - Internship / Part-time / Full-time?
  - Remote / Hybrid / On-site?

### C. Contact Section
- [ ] Add your **phone number** (optional, but many recruiters want it)
- [ ] Add **WhatsApp link** — `https://wa.me/91XXXXXXXXXX`

### D. Skills Section — Recruiter Readability
- [ ] Group skills into clear recruiter-friendly categories:
  - **Languages**: Python, JavaScript, TypeScript, Java, C++
  - **AI / ML**: TensorFlow, PyTorch, OpenCV, Scikit-learn
  - **Web**: React, Node.js, FastAPI, Flask
  - **Tools**: Git, Docker, VS Code, Figma
  - **Cloud**: AWS / GCP (if any)

### E. New Section — "What I'm Looking For"
A small honest 2-line section that tells recruiters exactly what you want:
```
OPEN TO INTERNSHIPS
AI/ML · Full Stack · Python Backend
Noida / Remote · Available immediately
```
This can go inside the Hero or Contact section as a highlighted box.

### F. SEO / Discoverability
- [ ] Update `<title>` in `index.html` to include keywords:
  `"Pawan Mishra | AI/ML Developer | B.Tech CSE KIET 2028"`
- [ ] Add meta keywords in `index.html`:
  `AI developer, ML intern, Python developer, React developer, KIET`

---

*File: `pending.md` — delete once all items are done.*
