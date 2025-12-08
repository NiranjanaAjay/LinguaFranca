from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth import router as auth_router

app = FastAPI()

# ---- Add CORS Middleware ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allows POST, GET, OPTIONS
    allow_headers=["*"],
)

# ---- Include auth routes ----
app.include_router(auth_router)

@app.get("/")
def root():
    return {"message": "Backend is running"}
