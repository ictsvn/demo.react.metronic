import { useState } from "react";
import { KTIcon } from "../../_metronic/helpers";

interface Props {
  [key: string]: any; // eslint-disable-line
}
export const PasswordInput = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="position-relative">
      <input {...props} type={showPassword ? "text" : "password"} />

      <div
        className="position-absolute cursor-pointer"
        style={{ right: 35, top: 8 }}
        onClick={() => setShowPassword((p) => !p)}
      >
        <KTIcon
          iconName={showPassword ? "eye" : "eye-slash"}
          className="fs-2x"
        />
      </div>
    </div>
  );
};
