from pydantic import BaseModel, Field
from typing import List, Dict

class RespuestaPregunta(BaseModel):
    pregunta_id: int
    alternativa_marcada: str

class EvaluacionRequest(BaseModel):
    nombre_paciente: str
    respuestas: List[RespuestaPregunta]

    class Config:
        json_schema_extra = {
            "example": {
                "nombre_paciente": "Juan Pérez",
                "respuestas": [
                    {"pregunta_id": 1, "alternativa_marcada": "B"},
                    {"pregunta_id": 2, "alternativa_marcada": "A"},
                    {"pregunta_id": 3, "alternativa_marcada": "C"},
                ]
            }
        }

class AnalisisDimensiones(BaseModel):
    estres: List[float] = Field(..., description="Pesos calculados [r1, r2, r3, r4] para Estrés")
    autoestima: List[float] = Field(..., description="Pesos calculados [r1, r2, r3, r4] para Autoestima")
    animo: List[float] = Field(..., description="Pesos calculados [r1, r2, r3, r4] para Ánimo")


class EvaluacionResponse(BaseModel):
    paciente: str
    perfil_ganador: str = Field(..., description="Nombre del perfil teórico con mayor coincidencia")
    porcentaje_match: float = Field(..., description="Porcentaje de coincidencia matemática")
    prioridad: str = Field(..., description="Nivel de riesgo clínico (Alta, Media, Baja)")
    dictamen: str = Field(..., description="Juicio clínico del Sistema Experto")
    recomendacion: str = Field(..., description="Sugerencias terapéuticas modulares")

    pesos_calculados: AnalisisDimensiones

    class Config:
        json_schema_extra = {
            "example": {
                "paciente": "Juan Pérez",
                "perfil_ganador": "Burnout por Hiperexigencia",
                "porcentaje_match": 85.5,
                "prioridad": "Alta",
                "dictamen": "Perfil Detectado: Desgaste Mental por Hiperexigencia (Burnout)...",
                "recomendacion": "Establece bloques de descanso obligatorios...",
                "pesos_calculados": {
                    "estres": [0.4, 0.4, 0.2, 0.0],
                    "autoestima": [0.6, 0.2, 0.0, 0.2],
                    "animo": [0.2, 0.0, 0.8, 0.0]
                }
            }
        }