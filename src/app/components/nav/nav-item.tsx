"use client"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { usePathname } from "next/navigation";

type Props = {
      label: string;
      href: string;
      icon: IconDefinition;
      active?: boolean;
}
export const NavItem = ({ label, icon, href, active } : Props) => {
      const pathName = usePathname();
      const isMe = pathName === href;

      return(
            <Link href={href} className={`flex items-center gap-6 py-3 ${active || isMe ? 'opacity-100' : 'opacity-50'} hover:opacity-100 duration-200`}> 
                  <FontAwesomeIcon icon={icon} className="size-6" />
                  <div className="text-lg">{label}</div>
            </Link>
      )
}