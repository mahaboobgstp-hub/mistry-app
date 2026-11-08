# Mistry App — UI Prototype (v0.2)

A responsive React + Vite home-services marketplace prototype for the web, with Capacitor configuration and a GitHub Actions workflow for building a debug Android APK.

## Product experiences
- **Customer:** browse household services, describe an issue, enter an address and submit a service request.
- **Technician:** view nearby demo requests, accept jobs, review assigned work and submit a quotation.
- **Admin / customer care:** dashboard, booking management, technicians, customers, service catalogue, payments/payout overview and reports.

The demo catalogue includes plumbing, electrician, painting, carpentry, sanitary work, AC technician, refrigeration and TV technician services. Demo examples use Indian names, Hyderabad locations and INR pricing. The default commercial split is 90% technician / 10% Mistry.

## India-first visual direction
Indian faces are a product requirement for any future portraits, people photography, illustrations or marketing creatives. Do not use foreign-looking stock-photo models. Represent Indian customers and technicians authentically and respectfully, with regional and age diversity. The current prototype intentionally uses initials and service icons instead of portrait photos, so no non-Indian stock faces are present. See `PERSONA-VISUAL-GUIDELINES.md` and `src/data/brandGuidelines.js` before adding people imagery.

## What works in this UI prototype
- Role switching between Admin, Customer and Technician.
- Demo booking creation and in-memory state updates.
- Technician acceptance of pending demo jobs and quotation submission.
- Admin dashboards and management views backed by sample data.
- Responsive desktop and mobile layouts.

## Not connected yet
No live database, authentication, payment gateway, GPS/radius matching, SMS/WhatsApp, push notifications, real OTP verification or actual technician payouts are connected. Actions use temporary React state and reset when the page is refreshed. Payment and commission calculations must be validated and enforced on a trusted backend before production.

## Deploy the web app on Vercel
1. Create a GitHub repository and upload the **contents** of this project folder to the repository root.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. No environment variables are needed for the UI prototype.

## Build an Android debug APK using GitHub Actions
1. Upload the project to GitHub and push it to the `main` branch.
2. Open the repository's **Actions** tab and select **Build Mistry Android APK**.
3. The workflow runs automatically on pushes to `main`. It can also be started manually using **Run workflow**.
4. When the workflow completes successfully, open that run and download the `Mistry-debug-apk` artifact. It contains `app-debug.apk`.

The workflow installs dependencies, builds the Vite app, generates the Android project with Capacitor, and runs the Gradle debug build in GitHub's hosted runner. This is a debug/test APK, not a signed Play Store production release.

## Project structure
```text
mistry-app/
├── .github/workflows/build-android.yml
├── index.html
├── package.json
├── vite.config.js
├── capacitor.config.ts
├── .gitignore
├── README.md
├── PERSONA-VISUAL-GUIDELINES.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   ├── mockData.js
    │   └── brandGuidelines.js
    ├── components/
    │   ├── Icons.jsx
    │   ├── Sidebar.jsx
    │   ├── Topbar.jsx
    │   ├── StatCard.jsx
    │   └── Status.jsx
    └── pages/
        ├── Admin.jsx
        ├── Customer.jsx
        ├── Technician.jsx
        └── Management.jsx
```

## Future backend phases
Add a secure backend and database, role-based authentication, location-based request routing, first-accept job assignment, visit-fee collection, quotation approval, payment collection, customer OTP completion, technician payout ledger, 90/10 commission reconciliation, notifications and audit logs. Keep payment, assignment and commission enforcement on the server rather than trusting browser calculations.
