"use client";

import { IconType } from "react-icons";

interface AuthSocailButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton: React.FC<AuthSocailButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
inline-flex
w-full
justify-center
rounded-md
bg-gray
px-4
py-2
text-white
shadow-sm
ring-1
ring-insert
ring-gray
hover:bg-gray
focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
