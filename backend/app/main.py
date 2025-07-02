from fastapi import FastAPI #importar la clase principal
from fastapi.middleware.cors import CORSMiddleware #esto permite que otras apps puedan acceder a nuestra API
from routes import router #importar las rutas del archivo routes.py

app = FastAPI() #instanciar la clase FastAPI

#creamos el filtro de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitimos que el front se conecte
    allow_credentials=True, #Permitimos que se creen credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados
)

app.include_router(router) #incluimos las rutas definidas en routes.py
#le decimos que use todas la rutas que se encuentran en el router

