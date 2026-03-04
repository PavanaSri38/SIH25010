[2026-01-01T09:00:00] R. Pavana Sri — chore: initialise project structure and folders — project-setup
[2026-01-01T11:00:00] R. Pavana Sri — docs: add README with project overview — docs
[2026-01-02T09:00:00] R. Pavana Sri — chore: add .gitignore for Python and Node — setup
[2026-01-02T11:00:00] R. Pavana Sri — feat(config): add Pydantic settings for all API keys — backend
[2026-01-03T09:00:00] R. Pavana Sri — feat(db): set up SQLAlchemy engine and Base — backend
[2026-01-03T11:00:00] R. Pavana Sri — feat(models): add User ORM model with OTP fields — backend
[2026-01-04T09:00:00] R. Pavana Sri — feat(models): add SoilAnalysisHistory ORM model — backend
[2026-01-04T11:00:00] R. Pavana Sri — feat(db): add init_database script — backend
[2026-01-05T09:00:00] R. Pavana Sri — feat(auth): implement OTP generation utility — auth
[2026-01-05T11:00:00] R. Pavana Sri — feat(auth): add SendGrid email OTP service — auth
[2026-01-06T09:00:00] R. Pavana Sri — feat(auth): add register, login, verify-OTP endpoints — auth
[2026-01-07T09:00:00] M. Hema Latha — feat(weather): integrate Open-Meteo geocoding API — weather
[2026-01-07T11:00:00] M. Hema Latha — feat(weather): add climate alert detection — weather
[2026-01-08T09:00:00] M. Hema Latha — feat(weather): add GET /api/weather/current endpoint — weather
[2026-01-08T11:00:00] M. Hema Latha — feat(market): implement market price service — market
[2026-01-09T09:00:00] M. Hema Latha — feat(market): add GET /api/market/prices endpoint — market
[2026-01-09T11:00:00] M. Hema Latha — feat(ai): add Gemini 2.5 Flash service with caching — ai
[2026-01-10T09:00:00] M. Hema Latha — feat(soil): add soil type detection service — soil
[2026-01-10T11:00:00] M. Hema Latha — feat(crop): implement 9-step crop recommendation engine — crop
[2026-01-11T09:00:00] M. Hema Latha — data: add crops.json with 15 Indian crops metadata — data
[2026-01-11T11:00:00] M. Hema Latha — feat(crop): add POST /api/crop/recommend endpoint — crop
[2026-01-12T09:00:00] M. Hema Latha — feat(ml): implement MobileNetV2 DiseaseDetector class — ml
[2026-02-01T09:00:00] D.J.V.V. Bhaskar — feat(disease): add POST /api/disease/detect endpoint — disease
[2026-02-01T11:00:00] D.J.V.V. Bhaskar — feat(soil): add soil analysis endpoint with scoring — soil
[2026-02-02T09:00:00] D.J.V.V. Bhaskar — feat(app): wire all routers into FastAPI with CORS — backend
[2026-02-02T11:00:00] D.J.V.V. Bhaskar — deps: add frontend package.json with React 18 — frontend
[2026-02-03T09:00:00] D.J.V.V. Bhaskar — config(vite): set up Vite with API proxy to :8000 — frontend
[2026-02-03T11:00:00] D.J.V.V. Bhaskar — feat(frontend): add index.html entry point — frontend
[2026-02-04T09:00:00] D.J.V.V. Bhaskar — feat(frontend): add React entry point main.jsx — frontend
[2026-02-04T11:00:00] D.J.V.V. Bhaskar — feat(frontend): add App.jsx with all 10 routes — frontend
[2026-02-05T09:00:00] D.J.V.V. Bhaskar — style: add global CSS variables and base styles — frontend
[2026-02-05T11:00:00] D.J.V.V. Bhaskar — feat(ui): build Landing page with hero section — ui
[2026-02-06T09:00:00] D.J.V.V. Bhaskar — feat(ui): build Login page with 2-step OTP flow — ui
[2026-02-06T11:00:00] D.J.V.V. Bhaskar — feat(ui): build Register page with language selector — ui
[2026-02-07T09:00:00] D.J.V.V. Bhaskar — feat(ui): build Dashboard with 6 module cards — ui
[2026-02-07T11:00:00] D.J.V.V. Bhaskar — feat(ui): build SoilAnalysis page with health score — ui
[2026-02-08T09:00:00] D.J.V.V. Bhaskar — feat(ui): build CropRecommendation page — ui
[2026-02-08T11:00:00] D.J.V.V. Bhaskar — feat(ui): build DiseaseDetection page with upload — ui
[2026-02-09T09:00:00] D.J.V.V. Bhaskar — feat(ui): build Weather page with alert cards — ui
[2026-02-09T11:00:00] D.J.V.V. Bhaskar — feat(ui): build MarketPrices page with trend badge — ui
[2026-02-10T09:00:00] D.J.V.V. Bhaskar — feat(ui): add About page with team and tech stack — ui
[2026-02-10T11:00:00] D.J.V.V. Bhaskar — feat(i18n): add multilingual i18n engine — i18n
[2026-02-11T09:00:00] D.J.V.V. Bhaskar — feat(i18n): add English locale JSON file — i18n
[2026-02-11T11:00:00] D.J.V.V. Bhaskar — feat(i18n): add Hindi locale JSON file — i18n
[2026-02-12T09:00:00] D.J.V.V. Bhaskar — feat(i18n): add Telugu locale JSON file — i18n
[2026-02-12T11:00:00] D.J.V.V. Bhaskar — feat(i18n): add Tamil locale JSON file — i18n
[2026-02-13T09:00:00] D.J.V.V. Bhaskar — feat(i18n): add Marathi and Gujarati locale files — i18n
[2026-02-13T11:00:00] D.J.V.V. Bhaskar — feat(i18n): add Bengali locale JSON file — i18n
[2026-02-14T09:00:00] D.J.V.V. Bhaskar — docs: add .env.example with API key placeholders — docs
[2026-02-14T11:00:00] D.J.V.V. Bhaskar — chore: add start.bat one-click launcher for Windows — devops
[2026-02-15T09:00:00] D.J.V.V. Bhaskar — chore: add stop.bat to kill backend and frontend — devops
[2026-02-15T11:00:00] D.J.V.V. Bhaskar — chore: add diagnose.bat to check system status — devops
[2026-02-16T09:00:00] D.J.V.V. Bhaskar — test: add Gemini API connectivity test script — test
[2026-02-16T11:00:00] D.J.V.V. Bhaskar — feat(context): add context service for soil data — backend
[2026-02-17T09:00:00] D.J.V.V. Bhaskar — feat(i18n): add Hindi and Telugu backend locale files — i18n
[2026-03-01T09:00:00] S. Chaitanya — docs(ml): add README for plant disease model directory — docs
[2026-03-01T11:00:00] S. Chaitanya — docs: add CHANGELOG.md tracking v1.0.0 features — docs
[2026-03-02T09:00:00] S. Chaitanya — feat(backend): add global exception handlers — backend
[2026-03-02T11:00:00] S. Chaitanya — feat(ui): add 404 NotFound page — ui
[2026-03-03T09:00:00] S. Chaitanya — feat(api): add /health check endpoint — backend
[2026-03-03T11:00:00] S. Chaitanya — feat(ui): add reusable Spinner loading component — ui
[2026-03-04T09:00:00] S. Chaitanya — test: add unit tests for OTP generation and validation — test
[2026-03-04T11:00:00] S. Chaitanya — test: add unit tests for soil health scoring — test
