import { useEffect, useRef, useState } from "react"

type Modo = "foco" | "pausaCurta" | "pausaLonga"

const MODOS: Record<Modo, { rotulo: string; minutos: number; cor: string }> = {
  foco: { rotulo: "Foco", minutos: 25, cor: "#2563EB" },
  pausaCurta: { rotulo: "Pausa curta", minutos: 5, cor: "#16A34A" },
  pausaLonga: { rotulo: "Pausa longa", minutos: 15, cor: "#D97706" },
}

function formatar(segundos: number) {
  const m = Math.floor(segundos / 60).toString().padStart(2, "0")
  const s = (segundos % 60).toString().padStart(2, "0")
  return `${m}:${s}`
}

function Estudos() {
  const [modo, setModo] = useState<Modo>("foco")
  const [segundos, setSegundos] = useState(MODOS.foco.minutos * 60)
  const [rodando, setRodando] = useState(false)
  const [ciclos, setCiclos] = useState(0)

  // Guarda o horário previsto para o fim, assim o timer continua correto
  // mesmo se a aba ficar em segundo plano.
  const fimRef = useRef<number>(0)

  const total = MODOS[modo].minutos * 60
  const progresso = ((total - segundos) / total) * 100

  function trocarModo(novo: Modo) {
    setModo(novo)
    setRodando(false)
    setSegundos(MODOS[novo].minutos * 60)
  }

  function alternar() {
    if (!rodando) {
      fimRef.current = Date.now() + segundos * 1000
    }
    setRodando(!rodando)
  }

  function reiniciar() {
    setRodando(false)
    setSegundos(total)
  }

  useEffect(() => {
    if (!rodando) return

    const id = setInterval(() => {
      const restante = Math.max(0, Math.round((fimRef.current - Date.now()) / 1000))
      setSegundos(restante)

      if (restante === 0) {
        clearInterval(id)
        setRodando(false)

        if (modo === "foco") {
          const novoTotal = ciclos + 1
          setCiclos(novoTotal)
          // A cada 4 ciclos de foco, pausa longa
          trocarModo(novoTotal % 4 === 0 ? "pausaLonga" : "pausaCurta")
        } else {
          trocarModo("foco")
        }
      }
    }, 250)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rodando, modo, ciclos])

  // Mostra o tempo restante na aba do navegador
  useEffect(() => {
    document.title = rodando ? `${formatar(segundos)} · ${MODOS[modo].rotulo}` : "Cantinho de Estudos"
    return () => {
      document.title = "Biblioteca"
    }
  }, [segundos, rodando, modo])

  return (
    <>
      <header className="bg-[#0F172A] border-b border-[#1E293B] py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight"> Biblioteca</h1>
            <p className="text-[#94A3B8] text-sm mt-1 m-0">Seu conhecimento começa aqui.</p>
          </div>

          <div className="flex gap-3">
            <a
              href="/login"
              className="bg-[#2563EB] text-white py-2.5 px-5 rounded-lg text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors"
            >
              Entrar
            </a>
            <a
              href="/register"
              className="bg-transparent text-white border border-[#334155] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#1e293b] transition-colors"
            >
              Criar conta
            </a>
            <a
              href="/chat"
              className="bg-transparent text-white border border-[#883888] py-2.5 px-5 rounded-lg text-sm font-semibold no-underline hover:bg-[#021000] transition-colors"
            >
              Chat
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
        <section className="text-center mb-8">
          <h2 className="text-[32px] font-extrabold text-[#0F172A] mb-3 tracking-tight">
            Cantinho de Estudos
          </h2>
          <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
            Estude em blocos de foco com pausas curtas. A cada 4 ciclos, uma pausa longa.
          </p>
        </section>

        <section className="max-w-[460px] mx-auto bg-white p-8 rounded-2xl shadow-sm border border-[#E2E8F0] box-border">
          {/* Seletor de modo */}
          <div className="flex gap-2 mb-8 bg-[#F1F5F9] p-1 rounded-xl">
            {(Object.keys(MODOS) as Modo[]).map((m) => (
              <button
                key={m}
                onClick={() => trocarModo(m)}
                className={`flex-1 py-2 px-2 rounded-lg text-[13px] font-semibold border-0 cursor-pointer transition-colors ${
                  modo === m
                    ? "bg-white text-[#0F172A] shadow-sm"
                    : "bg-transparent text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {MODOS[m].rotulo}
              </button>
            ))}
          </div>

          {/* Tempo */}
          <div className="text-center mb-6">
            <div
              className="text-[84px] leading-none font-extrabold tracking-tight tabular-nums"
              style={{ color: MODOS[modo].cor }}
              role="timer"
              aria-live="off"
            >
              {formatar(segundos)}
            </div>
            <p className="text-sm text-[#64748B] mt-3 mb-0">
              {modo === "foco" ? "Hora de focar" : "Hora de descansar"}
            </p>
          </div>

          {/* Barra de progresso */}
          <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden mb-8">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${progresso}%`, backgroundColor: MODOS[modo].cor }}
            />
          </div>

          {/* Controles */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={alternar}
              className="bg-[#2563EB] text-white py-3 px-8 rounded-lg text-sm font-semibold border-0 cursor-pointer shadow-sm hover:bg-[#1d4ed8] transition-colors"
            >
              {rodando ? "Pausar" : segundos < total ? "Continuar" : "Iniciar"}
            </button>
            <button
              onClick={reiniciar}
              className="bg-transparent text-[#1E293B] border border-[#CBD5E1] py-3 px-6 rounded-lg text-sm font-semibold cursor-pointer hover:bg-[#F1F5F9] transition-colors"
            >
              Reiniciar
            </button>
          </div>

          {/* Ciclos concluídos */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex justify-between items-center">
            <span className="text-sm text-[#64748B]">Ciclos de foco concluídos</span>
            <span className="text-lg font-bold text-[#0F172A]">{ciclos}</span>
          </div>
        </section>
      </main>
    </>
  )
}

export default Estudos
