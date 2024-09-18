from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
from model import detect_emotion

# Create FastAPI app
app = FastAPI()

# Enable CORS (allow all origins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test endpoint to check if the API is working
@app.get("/")
async def test():
    return {
        "message": "working fine",
        "status": "success"
    }

# Endpoint to receive and process an image
@app.post("/upload-image")
async def upload_image(image: UploadFile = File(...)):
    try:
         # Read the image file into a byte stream
        image_bytes = await image.read()  # Make sure this is reading bytes

        # Convert byte stream into an image using PIL
        img = Image.open(io.BytesIO(image_bytes))  # PIL can open byte stream via io.BytesIO

        # Process the image (detect emotions here)
        emotion = detect_emotion(img)

        return {
            "message": "Image processed successfully",
            "emotion": emotion
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error processing image: {str(e)}")


# Run the app if you're running locally using Uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)

