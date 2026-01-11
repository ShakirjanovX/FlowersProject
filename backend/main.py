from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import git
import os

app = FastAPI()

# Путь к сборке React
FRONTEND_BUILD_PATH = os.path.join(os.path.dirname(__file__), '..', 'build')

# Подключаем статику React
if os.path.exists(FRONTEND_BUILD_PATH):
    app.mount("/", StaticFiles(directory=FRONTEND_BUILD_PATH, html=True), name="static")


# Массивы цветов
seasonFlowers = [
    {"id": 1, "name": "Spring composition", "image": "./images/flower9.svg", "price": 20, "liked": False},
    {"id": 2, "name": "Summer composition", "image": "./images/flower12.svg", "price": 25, "liked": False},
    {"id": 3, "name": "Autumn composition", "image": "./images/flower11.svg", "price": 30, "liked": False}
]
exclusiveFlowers = [
    {"id": 4, "name": "Summer field", "image": "./images/flower6.svg", "price": 14, "liked": False},
    {"id": 5, "name": "Minimalism", "image": "./images/flower13.svg", "price": 18, "liked": False},
    {"id": 6, "name": "Love story", "image": "./images/flower14.svg", "price": 35, "liked": False},
    {"id": 7, "name": "Inspiration", "image": "./images/flower14.svg", "price": 20, "liked": False},
    {"id": 8, "name": "Bride's bouquet", "image": "./images/flower15.svg", "price": 40, "liked": False},
    {"id": 9, "name": "Winter bouquet", "image": "./images/flower16.svg", "price": 20, "liked": False}
]


# Корзина, избранное, профиль (в памяти)
basket = []
favourites = []
profile = {"username": "", "email": ""}

# API для получения цветов
@app.get("/api/seasonFlowers")
def get_season_flowers():
    return seasonFlowers

@app.get("/api/exclusiveFlowers")
def get_exclusive_flowers():
    return exclusiveFlowers

# API для корзины
# API для корзины
class BasketItem(BaseModel):
    id: int
    name: str
    image: str
    price: int
    liked: bool = False

@app.get("/api/basket")
def get_basket():
    return basket

@app.post("/api/basket")
def add_to_basket(item: BasketItem):
    basket.append(item.dict())
    return {"success": True, "basket": basket}

# API для избранного
@app.get("/api/favourites")
def get_favourites():
    return favourites

@app.post("/api/favourites")
def add_to_favourites(item: BasketItem):
    # Добавляем любой товар, даже если он уже есть
    favourites.append(item.dict())
    return {"success": True, "favourites": favourites}

# API для профиля
from pydantic import BaseModel
class Profile(BaseModel):
    username: str
    email: str

@app.get("/api/profile")
def get_profile():
    return profile

@app.post("/api/profile")
def set_profile(data: Profile):
    profile["username"] = data.username
    profile["email"] = data.email
    return {"success": True, "profile": profile}


# Обработка всех не-API маршрутов для поддержки React Router
from fastapi.responses import Response
from starlette.requests import Request as StarletteRequest


@app.middleware("http")
async def spa_router(request: StarletteRequest, call_next):
    path = request.url.path
    # Если это API, docs или openapi — отдаём как есть
    if path.startswith("/api") or path.startswith("/docs") or path.startswith("/openapi"):
        return await call_next(request)
    # Если это файл из build/static — отдаём как есть
    static_path = os.path.join(FRONTEND_BUILD_PATH, path.lstrip("/"))
    if os.path.exists(static_path):
        return await call_next(request)
    # Для остальных — index.html
    index_path = os.path.join(FRONTEND_BUILD_PATH, 'index.html')
    if os.path.exists(index_path):
        with open(index_path, "rb") as f:
            return Response(content=f.read(), media_type="text/html")
    return Response(content="<h1>React build not found. Run npm run build in frontend folder.</h1>", media_type="text/html")
