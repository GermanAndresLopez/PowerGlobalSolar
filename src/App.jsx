import { useForm } from 'react-hook-form';
import { FaSun, FaLeaf, FaMoneyBillWave, FaInstagram } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
    

      const response = await fetch("https://sheetdb.io/api/v1/41b23ih1trt2r", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }), // Clave "data"
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al enviar los datos a SheetDB: ${errorText}`);
      }
  
      toast.success("¡Formulario enviado con éxito!");
      reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      toast.error("Error al enviar el formulario.");
    }
  };
  

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          <div className="flex items-center mb-4">
  <img src="/icon2.png" alt="Logo" className="w-10 h-10 mr-2" />
  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
    Power Global Solar
  </h1>
</div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#beneficios" className="text-gray-700 hover:text-primary-600 transition-colors">Beneficios</a>
              <a href="#productos" className="text-gray-700 hover:text-primary-600 transition-colors">Productos</a>
              <a href="#contacto" className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero con Formulario */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Paneles solares"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Energía Solar para un
                <span className="block text-green-500 mb-4">Futuro Brillante</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                Transforma tu consumo energético con nuestras soluciones solares de última generación.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Obtén tu Cotización Gratuita
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    {...register('nombre', { required: true })}
                    className="py-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && <span className="text-red-500 text-sm">Este campo es requerido</span>}
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    {...register('telefono', { required: true })}
                    className="py-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Tu número de teléfono"
                  />
                  {errors.telefono && <span className="text-red-500 text-sm">Este campo es requerido</span>}
                </div>
                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    {...register('correo', { required: true, pattern: /^\S+@\S+$/i })}
                    className="py-2 mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="tu@email.com"
                  />
                  {errors.correo && <span className="text-red-500 text-sm">Por favor ingresa un email válido</span>}
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    {...register('mensaje')}
                    rows="3"
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Cuéntanos sobre tu proyecto"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 py-3 px-4 text-white rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Solicitar Cotización Gratuita
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Beneficios */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            ¿Por qué Elegir Energía Solar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-500 mb-4">
                <FaSun className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Independencia Energética</h3>
              <p className="text-gray-600">
                Genera tu propia electricidad limpia y reduce la dependencia de la red eléctrica.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-500 mb-4">
                <FaLeaf className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impacto Ambiental</h3>
              <p className="text-gray-600">
                Reduce tu huella de carbono y contribuye a un planeta más limpio.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-500 mb-4">
                <FaMoneyBillWave className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahorro Financiero</h3>
              <p className="text-gray-600">
                Ahorra hasta un 70% en tus facturas de electricidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Productos */}
      <section id="productos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Nuestras Soluciones Solares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="image (4).jpeg"
                alt="Solar Residencial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Solar Residencial</h3>
                <p className="text-gray-600 mb-4">
                  Soluciones perfectas para hogares, incluyen paneles premium con garantía de 25 años.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Solar Comercial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Solar Comercial</h3>
                <p className="text-gray-600 mb-4">
                  Soluciones escalables para empresas con implementación enfocada en ROI.
                </p>
              </div>
            </div>
           
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">

                <img src="image (4).jpeg" 
                alt="Ahorro Energético"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ahorra hasta un 80%</h3>
                <p className="text-gray-600 mb-4">
                  Genera tu propia energía y reduce hasta un 80% tu factura eléctrica con tecnología solar inteligente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="contacto" className="py-20"></section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4"> Power Global Solar</h3>
              <p className="text-gray-400">
                Cambiando tu estilo de vida con energia limpia y sostenible.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-gray-400">
                Calle 11n 19c 38<br />
                Valledupar - Cesar<br />
                Tel: (57) 311 797 9715<br />
                Email: powerglobalsolar@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/powerglobalsolar/" className="text-gray-400 hover:text-white transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Power Global Solar. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
