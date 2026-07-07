import os
import clips

class MotorExperto:
    def __init__(self):
        """
        """

    def ejecutar_diagnostico(self, nombre_usuario, pesos_estres, pesos_autoestima, pesos_animo):
        env = clips.Environment()

        directorio_actual = os.path.dirname(os.path.abspath(__file__))

        ruta_clp = os.path.normpath(
            os.path.join(directorio_actual, "..", "knowledge_base", "reglas_psicologia.clp")
        )

        if not os.path.exists(ruta_clp):
            raise FileNotFoundError(f"No se encontró el archivo de reglas en: {ruta_clp}")

        env.load(ruta_clp)

        env.reset()

        template_usuario = env.find_template("evaluacion-usuario")
        v_estres = tuple(float(x) for x in pesos_estres)
        v_autoestima = tuple(float(x) for x in pesos_autoestima)
        v_animo = tuple(float(x) for x in pesos_animo)

        template_usuario.assert_fact(
            nombre=nombre_usuario,
            estres=v_estres,
            autoestima=v_autoestima,
            animo=v_animo
        )

        env.run()
        for fact in env.facts():
            print(fact)
        print("==================================\n")

        template_resultado = env.find_template("hecho-resultado")

        resultado_final = None

        for fact in template_resultado.facts():
            if fact["paciente"] == nombre_usuario:
                resultado_final = {
                    "paciente": fact["paciente"],
                    "perfil_ganador": fact["perfil-ganador"],
                    "porcentaje_match": round(fact["porcentaje-match"], 2),
                    "dictamen": fact["dictamen"],
                    "recomendacion": fact["recomendacion"],
                    "prioridad": fact["prioridad"]
                }
                break
        return resultado_final