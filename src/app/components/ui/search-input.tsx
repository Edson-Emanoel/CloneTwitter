"use client"

import { useState } from "react";
import { Input } from "./input"
import { faHourglass } from "@fortawesome/free-regular-svg-icons"
import { usePathname, useRouter } from "next/navigation";

type Props = {
      defaultValue?: string;
      hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
      const router = useRouter()
      const pathname = usePathname()
      const [searchInput, setSearchInput] = useState(defaultValue ?? '')

      const handleSearchEnter = () => {
            if(searchInput){
                  router.push('/search?q='+encodeURIComponent(searchInput))
            }
      }

      if(hideOnSearch && pathname === '/search') return null;

      return (
            <Input
                  filled
                  icon={faHourglass}
                  value={searchInput}
                  placeholder="Buscar"
                  onEnter={handleSearchEnter}
                  onChange={(t) => setSearchInput(t)}
            />
      )
}