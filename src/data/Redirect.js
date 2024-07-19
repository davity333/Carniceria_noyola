import { redirect } from "react-router-dom";
import { getUser } from "../../../../data/User";

const loader = async () => {
  const user = getUser();

  if (!user || !user.rol_id_fk) {
    return redirect("/login");
  }
  if (user.rol_id_fk === 3) {
    return redirect("/homeAdmin");
  } else {
    return redirect("/");
  }
};

export default loader;
