from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# السماح للتطبيقات الأمامية بالاتصال بالـ API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "GYM AI API is running 🚀"}

@app.post("/upload-images/")
async def upload_images(files: list[UploadFile] = File(...)):
    return {"filenames": [file.filename for file in files]}
