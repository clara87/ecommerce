import { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { Lock, User, Mail, Calendar } from "lucide-react";
function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contrasenia: "",
    confirmar: "",
    fnac: "",
  });

  const navigate = useNavigate();

  function navigateToHome() {
    navigate(-1);
  }

  function registerUser(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex flex-col justify-center  bg-gray-700 min-h-screen items-center pt-12">
      <div className=" bg-gray-900 rounded-2xl max-w-2xl w-full mx-4 ">
        <div className="flex justify-center py-4">
          <h1 className="text-2xl font-bold text-emerald-400">Registrarse</h1>
        </div>
        <form
          onSubmit={registerUser}
          className="space-y-5 flex flex-col justify-center px-8 pb-8"
        >
          <FormInput
            icon={<User size={18} />}
            labelText={"Nombre"}
            inputType={"text"}
            placeholder={"Juan"}
            value={formData.nombre}
            onChangeFn={(e) =>
              setFormData({ ...FormData, nombre: e.target.value })
            }
          />
          <FormInput
            icon={<User size={18} />}
            labelText={"Apellido"}
            inputType={"text"}
            placeholder={"Perez"}
            value={formData.apellido}
            onChangeFn={(e) =>
              setFormData({ ...FormData, apellido: e.target.value })
            }
          />
          <FormInput
            icon={<Mail size={18} />}
            labelText={"Email"}
            inputType={"email"}
            placeholder={"ejemplo@gmail.com"}
            value={formData.email}
            onChangeFn={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
          />
          <FormInput
            icon={<Lock size={18} />}
            labelText={"Contrasenia"}
            inputType={"password"}
            placeholder={"admin123"}
            value={formData.contrasenia}
            onChangeFn={(e) =>
              setFormData({ ...FormData, contrasenia: e.target.value })
            }
          />
          <FormInput
            icon={<Lock size={18} />}
            labelText={"Confirmar"}
            inputType={"password"}
            placeholder={"admin123"}
            value={formData.confirmar}
            onChangeFn={(e) =>
              setFormData({ ...FormData, confirmar: e.target.value })
            }
          />

          <FormInput
            icon={<Calendar size={18} />}
            labelText={"Fecha Nac"}
            inputType={"Date"}
            placeholder={"12/12/1987"}
            value={formData.fnac}
            onChangeFn={(e) =>
              setFormData({ ...FormData, fnac: e.target.value })
            }
          />
          <div className="flex flex-row justify-center gap-4 pt-6">
            <button
              onClick={() => navigateToHome()}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md flex items-center justify-center flex-1 text-center"
            >
              Volver
            </button>
            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 rounded-md flex items-center justify-center flex-1 text-cente"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
