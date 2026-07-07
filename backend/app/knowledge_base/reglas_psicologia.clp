(deftemplate evaluacion-usuario
   (slot nombre (type STRING))
   (multislot estres (type NUMBER))
   (multislot autoestima (type NUMBER))
   (multislot animo (type NUMBER)))

(deftemplate perfil-teorico
   (slot id-perfil (type INTEGER))
   (slot nombre-perfil (type STRING))
   (slot especificidad (type INTEGER))
   (multislot min-estres (type NUMBER))
   (multislot min-autoestima (type NUMBER))
   (multislot min-animo (type NUMBER))
   (slot dictamen (type STRING))
   (slot recomendacion (type STRING))
   (slot prioridad (type STRING)))

(deftemplate puntaje-candidato
   (slot paciente (type STRING))
   (slot id-perfil (type INTEGER))
   (slot nombre-perfil (type STRING))
   (slot match-rate (type NUMBER))
   (slot puntaje-ponderado (type NUMBER))
   (slot dictamen (type STRING))
   (slot recomendacion (type STRING))
   (slot prioridad (type STRING)))

(deftemplate hecho-resultado
   (slot paciente (type STRING))
   (slot perfil-ganador (type STRING))
   (slot porcentaje-match (type NUMBER))
   (slot dictamen (type STRING))
   (slot recomendacion (type STRING))
   (slot prioridad (type STRING)))


(deffacts catalogo-perfiles-psicologicos
   (perfil-teorico
      (id-perfil 1) (nombre-perfil "Burnout por Hiperexigencia") (especificidad 3)
      (min-estres     0.0  0.50 0.0  0.0)
      (min-autoestima 0.40 0.0  0.0  0.0)
      (min-animo      0.0  0.40 0.0  0.0)
      (dictamen "Perfil Detectado: Desgaste Mental por Hiperexigencia (Burnout). Canalizas la presión mediante un sobreesfuerzo rígido respaldado por una autocrítica severa.")
      (recomendacion "Establece bloques de descanso obligatorios e innegociables en tu agenda diaria. Flexibiliza tus metas semanales.")
      (prioridad "Alta"))

   (perfil-teorico
      (id-perfil 2) (nombre-perfil "Ciclo Evasivo Apatico") (especificidad 2)
      (min-estres     0.50 0.0  0.0  0.0)
      (min-autoestima 0.0  0.0  0.0  0.0)
      (min-animo      0.50 0.0  0.0  0.0)
      (dictamen "Perfil Detectado: Afrontamiento Evasivo con Apatía. Tiendes a posponer responsabilidades académicas como mecanismo defensivo ante el malestar.")
      (recomendacion "Aplica la regla de los 5 minutos para romper la inercia del inicio y segmenta tus entregas en subtareas mínimas.")
      (prioridad "Media"))

   (perfil-teorico
      (id-perfil 3) (nombre-perfil "Bloqueo Ansioso") (especificidad 3)
      (min-estres     0.0  0.0  0.40 0.0)
      (min-autoestima 0.0  0.0  0.40 0.0)
      (min-animo      0.0  0.0  0.40 0.0)
      (dictamen "Perfil Detectado: Bloqueo por Ansiedad Social y Aislamiento. La presión evaluativa satura tus recursos cognitivos, induciendo al retraimiento.")
      (recomendacion "Practica técnicas de respiración diafragmática previas al estudio y busca espacios de co-working estudiantil sin presión.")
      (prioridad "Alta"))

   (perfil-teorico
      (id-perfil 4) (nombre-perfil "Resiliente Saludable") (especificidad 3)
      (min-estres     0.0  0.0  0.0  0.50)
      (min-autoestima 0.0  0.0  0.0  0.50)
      (min-animo      0.0  0.0  0.0  0.50)
      (dictamen "Perfil Detectado: Alta Resiliencia Academica. Cuentas con una excelente gestión del estrés, autoconcepto robusto y estabilidad emocional.")
      (recomendacion "Continúa aplicando tus estrategias de afrontamiento asertivo y considera postular a roles de tutoría o mentoría académica.")
      (prioridad "Baja"))

   (perfil-teorico
      (id-perfil 5) (nombre-perfil "Ansiedad Critica Latente") (especificidad 3)
      (min-estres     0.0  0.40 0.0  0.0)
      (min-autoestima 0.50 0.0  0.0  0.0)
      (min-animo      0.0  0.0  0.0  0.40)
      (dictamen "Perfil Detectado: Fachada de Exito con Vulnerabilidad Interna. Mantienes un rendimiento funcional y estabilidad externa, pero a expensas de un diálogo interno destructivo.")
      (recomendacion "Inicia un registro diario de pensamientos automáticos negativos para reestructurar las distorsiones de autocrítica.")
      (prioridad "Media"))

   (perfil-teorico
      (id-perfil 6) (nombre-perfil "Desconexion Defensiva") (especificidad 2)
      (min-estres     0.0  0.0  0.0  0.0)
      (min-autoestima 0.0  0.0  0.50 0.0)
      (min-animo      0.40 0.0  0.0  0.0)
      (dictamen "Perfil Detected: Desconexión Emocional Defensiva. Utilizas el distanciamiento y una postura defensiva para blindar tu autoestima ante posibles fallas.")
      (recomendacion "Acepta el feedback académico enfocado exclusivamente en la tarea y no en tu valor personal.")
      (prioridad "Media"))

   (perfil-teorico
      (id-perfil 7) (nombre-perfil "Dependencia Evaluativa") (especificidad 2)
      (min-estres     0.0  0.0  0.0  0.0)
      (min-autoestima 0.0  0.50 0.0  0.0)
      (min-animo      0.0  0.50 0.0  0.0)
      (dictamen "Perfil Detectado: Inestabilidad por Dependencia de Aprobacion. Tu estado anímico y autoconcepto fluctúan drásticamente según las calificaciones o la opinión ajena.")
      (recomendacion "Diversifica tus fuentes de gratificación personal fuera del ámbito puramente universitario (hobbies, deportes).")
      (prioridad "Media"))

   (perfil-teorico
      (id-perfil 8) (nombre-perfil "Neutro Basal") (especificidad 1)
      (min-estres     0.0  0.0  0.0  0.0)
      (min-autoestima 0.0  0.0  0.0  0.0)
      (min-animo      0.0  0.0  0.0  0.0)
      (dictamen "Perfil Detectado: Estado Académico Basal Neutro. No manifiestas inclinaciones críticas ni conductas de riesgo consolidadas en ninguna dimensión.")
      (recomendacion "Mantén tus rutinas actuales y realiza evaluaciones preventivas periódicas para monitorear tu salud mental.")
      (prioridad "Baja"))
)


(defrule calcular-coincidencia-perfiles
   (evaluacion-usuario (nombre ?nom) (estres $?le) (autoestima $?la) (animo $?lan))
   (perfil-teorico
      (id-perfil ?id) (nombre-perfil ?np) (especificidad ?esp)
      (min-estres $?me) (min-autoestima $?ma) (min-animo $?man)
      (dictamen ?dict) (recomendacion ?reco) (prioridad ?prio))
   =>
   (bind ?condiciones-cumplidas 0)

   (loop-for-count (?i 1 4) do
      (bind ?ure (nth$ ?i ?le))  (bind ?pme (nth$ ?i ?me))
      (bind ?ura (nth$ ?i ?la))  (bind ?pma (nth$ ?i ?ma))
      (bind ?urn (nth$ ?i ?lan)) (bind ?pman (nth$ ?i ?man))

      (if (and (> ?pme 0.0) (>= ?ure ?pme)) then (bind ?condiciones-cumplidas (+ ?condiciones-cumplidas 1)))
      (if (and (> ?pma 0.0) (>= ?ura ?pma)) then (bind ?condiciones-cumplidas (+ ?condiciones-cumplidas 1)))
      (if (and (> ?pman 0.0) (>= ?urn ?pman)) then (bind ?condiciones-cumplidas (+ ?condiciones-cumplidas 1)))
   )

   (bind ?rate 0.0)
   (if (> ?esp 0)
      then (bind ?rate (/ ?condiciones-cumplidas ?esp))
      else (bind ?rate 1.0))

   (bind ?ponderado (* ?rate ?esp))

   (assert (puntaje-candidato
      (paciente ?nom) (id-perfil ?id) (nombre-perfil ?np)
      (match-rate ?rate) (puntaje-ponderado ?ponderado)
      (dictamen ?dict) (recomendacion ?reco) (prioridad ?prio)))
)

(defrule seleccionar-maximo-perfil
   (declare (salience -10))
   ?c1 <- (puntaje-candidato
            (paciente ?pac) (id-perfil ?id) (nombre-perfil ?np)
            (match-rate ?mr) (puntaje-ponderado ?pp)
            (dictamen ?dict) (recomendacion ?reco) (prioridad ?prio))

   (test (> ?pp 0.0))
   (not (puntaje-candidato (puntaje-ponderado ?pp2&:(> ?pp2 ?pp))))
   (not (hecho-resultado (paciente ?pac)))
   =>
   (assert (hecho-resultado
      (paciente ?pac) (perfil-ganador ?np) (porcentaje-match (* ?mr 100.0))
      (dictamen ?dict) (recomendacion ?reco) (prioridad ?prio)))
)

(defrule activar-perfil-basal-por-descarte
   (declare (salience -20))
   (evaluacion-usuario (nombre ?pac))
   (not (hecho-resultado (paciente ?pac)))
   (perfil-teorico (id-perfil ?id&:(= ?id 8)) (nombre-perfil ?np) (dictamen ?dict) (recomendacion ?reco) (prioridad ?prio))
   =>
   (assert (hecho-resultado
      (paciente ?pac) (perfil-ganador ?np) (porcentaje-match 0.0)
      (dictamen ?dict) (recomendacion ?reco) (prioridad ?prio)))
)