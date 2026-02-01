# Team Tasks API (Node.js + Express + SQLite)

API מינימלי ומוכן לפרודקשן לניהול צוותים, פרויקטים ומשימות. עובד מקומית עם קובץ SQLite וניתן לפריסה ל-Render עם דיסק מתמשך.

## Endpoints (בקצרה)

- `POST /api/auth/register` — גוף הבקשה: `{ name, email, password }`
- `POST /api/auth/login` — גוף הבקשה: `{ email, password }` → מחזיר `{ token, user }`
- `GET /api/teams` — דורש טוקן Bearer
- `POST /api/teams` — `{ name }`
- `POST /api/teams/:teamId/members` — `{ userId, role }`
- `GET /api/projects` — הפרויקטים של המשתמש
- `POST /api/projects` — `{ teamId, name, description? }`
- `GET /api/tasks?projectId=`
- `POST /api/tasks` — `{ projectId, title, ... }`
- `PATCH /api/tasks/:id` — עדכון חלקי
- `DELETE /api/tasks/:id`
- `GET /api/comments?taskId=`
- `POST /api/comments` — `{ taskId, body }`

**Auth (אימות):**  
JWT מסוג Bearer בכותרת `Authorization`.

---

## הרצה מקומית

```bash
cp .env.example .env
npm install
npm run seed  # נתוני דמו (אופציונלי)
npm start
# לפתוח בדפדפן: http://localhost:3000/health
פריסה ל-Render
העלו את ה-repo ל-GitHub.

ב-Render לחצו New + Web Service.

בחרו את ה-repo והגדירו Root Directory לתיקיית השורש של הפרויקט.

Render יקרא את render.yaml ויקים דיסק מתמשך בנתיב /data עבור קובץ ה-SQLite.

ודאו שמשתנה הסביבה DB_FILE מוגדר ל־/data/data.sqlite (כבר מוגדר ב-render.yaml).

בפריסה הראשונה ניתן לטעון נתוני דמו ידנית דרך Render Shell:

bash
Copy code
npm run seed
או להגדיר זמנית SEED=true ולהוסיף hook לטעינה אוטומטית.

Notes (הערות)
בסיס הנתונים הוא SQLite עם WAL מופעל ואכיפת Foreign Keys.

קיים שדה role בסיסי, אך אין עדיין RBAC מתקדם.

לפרודקשן מומלץ להחליף (rotate) את JWT_SECRET ולהוסיף Rate Limiting.