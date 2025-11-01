import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { User, Mail } from "lucide-react";

function Login({ login, loginAsAdmin }) {
  const [formData, setFormData] = useState({
    email: "",
    contrasenia: "",
  });

  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();
    if (
      formData.email == "admin@admin.com" &&
      formData.contrasenia == "admin"
    ) {
      loginAsAdmin();
      navigate("/dashboard")
    } else {
      login();
      navigate("/")
    }
    console.log(formData);
  }

  function navigateToHome() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col justify-center  bg-gray-700 min-h-screen items-center pt-12">
      <div className=" bg-gray-900 rounded-2xl max-w-2xl w-full mx-4 ">
        <div className="flex justify-center py-4">
          <h1 className="text-2xl font-bold text-emerald-400">LOGIN</h1>
        </div>
        <form
          onSubmit={loginUser}
          className="space-y-5 flex flex-col justify-center px-8 pb-8"
        >
          <FormInput
            icon={<Mail size={18} />}
            labelText={"email"}
            inputType={"email"}
            placeholder={"ejemplo@gmail.com"}
            value={formData.email}
            onChangeFn={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
          />
          <FormInput
            icon={<User size={18} />}
            labelText={"contrasenia"}
            inputType={"contrasenia"}
            placeholder={"admin"}
            value={formData.contrasenia}
            onChangeFn={(e) =>
              setFormData({ ...FormData, contrasenia: e.target.value })
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
export default Login;
