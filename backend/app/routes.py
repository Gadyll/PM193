from fastapi import APIRouter #sistema de rutas
from data import nombres #del data.py importo los nombres (datos)

router = APIRouter() #creo el router para poder definir las rutas

@router.get("/nombres") #definimo ruta get llamar nombres
def get_nombre(): #esta funcion se jecuta cuando alguien use el /nombres
    return nombres #retorno los nombres que estan en el data.py

#Sirve como buena practica para seccionar bine las rutas que tenemos
#y asi no amontonar todo en el main.py

