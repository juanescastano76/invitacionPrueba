"use client";

import { useRef, useEffect } from "react";

export default function Home() {
  const handleClick = async (answer: "SI" | "NO") => {
    try {
      await fetch(
        "https://pruebasalida-5a2c3-default-rtdb.firebaseio.com/respuestas.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            respuesta: answer,
            createdAt: new Date().toISOString(),
          }),
        }
      );
      alert("Respuesta guardada: " + answer);
    } catch (e) {
      alert("Error al guardar 😢");
      console.error(e);
    }
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("El navegador bloqueó el autoplay con sonido.");
      });
    }
  }, []);

  return (
    <div>
      <div className="h-screen flex items-center justify-center first-content">
        <audio ref={audioRef} autoPlay loop muted>
          <source src="/cupula.mp3" type="audio/mpeg" />
        </audio>

        <div className="text-center text-white ">
          <div>
            <audio ref={audioRef} autoPlay loop muted>
              <source src="/cupula.mp3" type="audio/mpeg" />
            </audio>

            <button
              onClick={() => (audioRef.current.muted = false)}
              className="px-4 py-2 bg-green-800 text-white rounded-lg mt-4"
            >
              🔊 Activar sonido
            </button>
          </div>
          <h1 className="text-4xl mb-4">Mi Luna 🌙</h1>
          <h2 className="text-xl my-2">Contigo todo brilla mas ✨</h2>
          <p className="mx-5 text-sm">
            Lunita, quiero recordarte una vez mas lo chimba que sos, no solo
            porque estas mas buena que el arroz chino con arta salsa agridulce,
            sino que por todo lo que transmites con tu forma de ser, linda vos
            tenes una manera unica de darle una luz a todos los dias, incluso si
            el dia esta siendo una mierda simplemente pensar en vos, escucharte
            o verte cambia el dia completamente, me encanta la forma en la que
            te expresas, tu ternura al hablar, como escuchas a todo el mundo con
            tanta atencion, te admiro muchismo mi luna, admiro tu forma de ser,
            tu forma tan curiosa de ver todas las cosas y la vida. Vos traes
            alegria, seguridad, felicida, paz a cualquier persona que entre a tu
            vida.; Lunitum, si pudieras verte con mis propios ojos, sentir lo
            que siento cuando te veo entenderias porque te admiro tanto, el
            porque me puedo quedar mirandote fijamente mientras sonrio como un
            hpta enfermo mental, la cantidad de sentimientos bonitos que
            recorren mi cuerpo al simplemente verte. Nunca dudes de vos maldita
            porque vos dejas huella y haces de este mundo un lugar mucho mejor.
            <br />
            Te quiero con toda mi alma
          </p>

          <p className="mt-5 text-xs">
            Y recuerda no tomarte las pastillas para que tomemos en el
            oktoberfest jeje
          </p>
        </div>
      </div>
      <div className="second-content h-screen">
        <div className="grid grid-cols-2 w-full">
          <img src="/img1.jpeg" alt="" className="w-full h-auto object-cover" />
          <img src="/img2.jpeg" alt="" className="w-full h-auto object-cover" />
          <img src="/img3.jpeg" alt="" className="w-full h-auto object-cover" />
          <img src="/img4.jpeg" alt="" className="w-full h-auto object-cover" />
        </div>
        <img src="/img5.jpeg" alt="" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

{
  /* <h2 className="text-lg">
          Te gustaría salir conmigo este día del amor y amistad? (20 de
          septiembre)
        </h2>
        <p className="text-sm mt-1">
          Este fin de semana 20 de sep y el 27 de septiembre (Oktoberfest) son
          días muy especiales para mí y me gustaría pasarlos con mi persona
          favorita
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => handleClick("SI")}
            className="px-6 py-2 rounded-2xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition"
          >
            SI
          </button>
          <button
            onClick={() => handleClick("NO")}
            className="px-6 py-2 rounded-2xl bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 transition"
          >
            NO
          </button>
        </div>
        <p className="mt-5">
          Tengo el plan perfecto, se que te va a encantar demasiado{" "}
        </p> */
}
