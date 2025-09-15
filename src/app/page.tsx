"use client";

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

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center text-white mx-10">
        <h1 className="text-4xl mb-4">Mi Luna 🌙</h1>
        <h2 className="text-lg">
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
        </p>
      </div>
    </div>
  );
}
