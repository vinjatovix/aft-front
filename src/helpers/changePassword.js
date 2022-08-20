import { fetchUpdatePassword } from "../http";
import { resetMessage } from "./resetMessage";

export const changePassword =
  (formState, setMessage, initMessage, resetForm) => async () => {
    const token = localStorage.getItem("token");
    const res = await fetchUpdatePassword(token, formState);

    if (res.ok) {
      setMessage({
        type: "success",
        text: "Contraseña cambiada correctamente",
      });
      resetMessage(setMessage, initMessage, resetForm);
    } else {
      setMessage({ type: "error", text: await res.json().message });
      resetMessage(setMessage, initMessage, resetForm);
    }
  };
