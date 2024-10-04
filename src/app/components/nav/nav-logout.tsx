"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesomeLogoFull } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";

export const NavLogOut = () => {
      const router = useRouter()

      const handleClick = () => {
            router.replace("/signIn")
      }

      return(
            <div onClick={handleClick} className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100 duration-200`}> 
                  <FontAwesomeIcon icon={faFontAwesomeLogoFull} className="size-6" />
                  <div className="text-lg">Sair</div>
            </div>
      )
}