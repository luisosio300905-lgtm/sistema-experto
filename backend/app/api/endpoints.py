from fastapi import APIRouter, HTTPException, status
from app.api.schemas import EvaluacionRequest, EvaluacionResponse, AnalisisDimensiones
from app.services.motor_experto import MotorExperto

router = APIRouter(
    prefix="/evaluacion",
    tags=["Evaluación Psicoacadémica"]
)

try:
    motor = MotorExperto()
except Exception as e:
    print(f"[Error de Inicialización]: {e}")
    motor = None

MATRIZ_MAPPING = {
    #Evitación - Hiperexigencia - Bloqueo - Afrontamiento Asertivo
    1:  {"A": ("estres", 0), "B": ("estres", 1), "C": ("estres", 2), "D": ("estres", 3)},
    2:  {"A": ("estres", 0), "B": ("estres", 1), "C": ("estres", 2), "D": ("estres", 3)},
    3:  {"A": ("estres", 0), "B": ("estres", 1), "C": ("estres", 2), "D": ("estres", 3)},
    4:  {"A": ("estres", 0), "B": ("estres", 1), "C": ("estres", 2), "D": ("estres", 3)},
    5:  {"A": ("estres", 0), "B": ("estres", 1), "C": ("estres", 2), "D": ("estres", 3)},

    #Autocrítica Severa o Inseguridad - Dependencia de Aprobación - Defensividad o Negación - Autoestima Saludable o Aceptación
    6:  {"A": ("autoestima", 0), "B": ("autoestima", 1), "C": ("autoestima", 2), "D": ("autoestima", 3)},
    7:  {"A": ("autoestima", 0), "B": ("autoestima", 1), "C": ("autoestima", 2), "D": ("autoestima", 3)},
    8:  {"A": ("autoestima", 0), "B": ("autoestima", 1), "C": ("autoestima", 2), "D": ("autoestima", 3)},
    9:  {"A": ("autoestima", 0), "B": ("autoestima", 1), "C": ("autoestima", 2), "D": ("autoestima", 3)},
    10: {"A": ("autoestima", 0), "B": ("autoestima", 1), "C": ("autoestima", 2), "D": ("autoestima", 3)},

    #Apatía/Anhedonia - Desregulación/Irritabilidad - Aislamiento Emocional - Estabilidad/Regulación Sana
    11: {"A": ("animo", 0), "B": ("animo", 1), "C": ("animo", 2), "D": ("animo", 3)},
    12: {"A": ("animo", 0), "B": ("animo", 1), "C": ("animo", 2), "D": ("animo", 3)},
    13: {"A": ("animo", 0), "B": ("animo", 1), "C": ("animo", 2), "D": ("animo", 3)},
    14: {"A": ("animo", 0), "B": ("animo", 1), "C": ("animo", 2), "D": ("animo", 3)},
    15: {"A": ("animo", 0), "B": ("animo", 1), "C": ("animo", 2), "D": ("animo", 3)}
}

@router.post("/diagnosticar", response_model=EvaluacionResponse, status_code=status.HTTP_200_OK)
async def diagnosticar_paciente(payload: EvaluacionRequest):
    if motor is None:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="El motor de CLIPS no está disponible en este momento."
        )

    conteos = {
        "estres": [0, 0, 0, 0],
        "autoestima": [0, 0, 0, 0],
        "animo": [0, 0, 0, 0]
    }

    for r in payload.respuestas:
        if r.pregunta_id in MATRIZ_MAPPING:
            opciones = MATRIZ_MAPPING[r.pregunta_id]
            if r.alternativa_marcada in opciones:
                seccion, indice = opciones[r.alternativa_marcada]
                conteos[seccion][indice] += 1
            else:
                raise HTTPException(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    detail=f"Alternativa '{r.alternativa_marcada}' inválida para la pregunta {r.pregunta_id}."
                )

    total_estres = sum(conteos["estres"])
    total_autoestima = sum(conteos["autoestima"])
    total_animo = sum(conteos["animo"])

    if total_estres == 0 or total_autoestima == 0 or total_animo == 0:
        raise HTTPException(
            status_code=status.HTTP_420_METHOD_FAILURE,
            detail="Respuestas inconsistentes. Cada dimensión debe tener al menos una respuesta marcada."
        )

    pesos_estres = [round(c / total_estres, 4) for c in conteos["estres"]]
    pesos_autoestima = [round(c / total_autoestima, 4) for c in conteos["autoestima"]]
    pesos_animo = [round(c / total_animo, 4) for c in conteos["animo"]]

    try:
        reporte_clips = motor.ejecutar_diagnostico(
            nombre_usuario=payload.nombre_paciente,
            pesos_estres=pesos_estres,
            pesos_autoestima=pesos_autoestima,
            pesos_animo=pesos_animo
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error durante la inferencia lógica: {str(e)}"
        )

    if not reporte_clips:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="El sistema experto no pudo clasificar un perfil para los pesos enviados."
        )

    response = EvaluacionResponse(
        paciente=reporte_clips["paciente"],
        perfil_ganador=reporte_clips["perfil_ganador"],
        porcentaje_match=reporte_clips["porcentaje_match"],
        prioridad=reporte_clips["prioridad"],
        dictamen=reporte_clips["dictamen"],
        recomendacion=reporte_clips["recomendacion"],
        pesos_calculados=AnalisisDimensiones(
            estres=pesos_estres,
            autoestima=pesos_autoestima,
            animo=pesos_animo
        )
    )

    return response