import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type Props = {
      value?: string;
      filled?: boolean;
      password?: boolean;
      placeholder: string;
      icon?: IconDefinition;
      onChange?: (newValue: string) => void;
      onEnter?: () => void;
}
export const Input = ({ password, icon, filled, placeholder, value, onChange, onEnter }: Props) => {
      const [showPassword, setPasswordField] = useState(false)

      const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
            if(event.code.toLowerCase() === 'enter' && onEnter) {
                  onEnter();
            }
      }

      return (
            <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'}`}>
                  <input
                        type={password && !showPassword ? "password" : "text"}
                        value={value}
                        placeholder={placeholder}
                        onChange={e => onChange && onChange(e.target.value)}
                        className="flex-1 outline-none bg-transparent h-full px-4"
                        onKeyUp={handleKeyUp}
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