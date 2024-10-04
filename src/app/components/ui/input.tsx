import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
      value?: string;
      filled?: boolean;
      password?: boolean;
      placeholder: string;
      icon?: IconDefinition;
      onChange?: (newValue: string) => void;
}
export const Input = ({ password, icon, filled, placeholder, value, onChange }: Props) => {
      const [showPassword, setPasswordField] = useState(false)

      return (
            <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
                  <input
                        type={password && !showPassword ? "password" : "text"}
                        value={value}
                        placeholder={placeholder}
                        onChange={e => onChange && onChange(e.target.value)}
                        className="flex-1 outline-none bg-transparent h-full px-4"
                  />
                  {icon &&
                        <FontAwesomeIcon icon={icon} className="mr-4 size-6 text-gray-500"/>
                  }
                  {password &&
                        <FontAwesomeIcon
                              onClick={() => setPasswordField(!showPassword)}
                              icon={showPassword ? faEye : faEyeSlash}
                              className="cursor-pointer mr-4 size-6 text-gray-500"
                        />
                  }
            </div>
      )
} 