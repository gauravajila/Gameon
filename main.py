from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict later to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load your API key (best practice: keep in .env)
GOOGLE_PLACES_API_KEY = os.getenv("GOOGLE_PLACES_API_KEY", "YOUR_GOOGLE_API_KEY")

@app.get("/courts")
def get_courts(area: str = Query(..., description="Locality to search for courts")):
    """
    Fetch badminton courts from Google Places API
    """
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        "query": f"badminton courts in {area}",
        "key": GOOGLE_PLACES_API_KEY
    }

    response = requests.get(url, params=params)
    data = response.json()

    courts = []
    for place in data.get("results", []):
        courts.append({
            "name": place.get("name"),
            "address": place.get("formatted_address"),
            "rating": place.get("rating", "N/A"),
            "place_id": place.get("place_id"),
        })

    return {"area": area, "courts": courts}
