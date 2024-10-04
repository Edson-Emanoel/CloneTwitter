import { ReactNode } from "react"
import { Logo } from "../components/ui/logo"
import { NavItem } from "../components/nav/nav-item"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faChrome } from "@fortawesome/free-brands-svg-icons"
import { NavLogOut } from "../components/nav/nav-logout"

type Props = {
      children: ReactNode
}
export default function Layout({ children }: Props){
      return(
            <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
                  <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-gray-900">
                        <div className="flex-1 mt-6">
                              <Logo size={24} />
                              <nav className="mt-11">
                                    <NavItem 
                                          label="Início"
                                          href="/home"
                                          icon={faChrome}
                                    />
                                    <NavItem 
                                          label="Meu Perfil"
                                          href="/user"
                                          icon={faUser}
                                    />
                              </nav>
                        </div>
                        <div>
                              <NavLogOut />
                        </div>
                  </section>
                  <section className="flex-1 max-w-lg">
                        {children}
                  </section>
                  <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-2 border-gray-900">
                        D
                  </aside>
            </main>
      )
}