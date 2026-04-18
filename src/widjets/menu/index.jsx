import Link from "next/link";
import { useState } from "react";

export default function Menu(){
const [openMenu, setOpenMenu] = useState(false)


    return(
        <nav className="header_menu">
                    <ul className={`header_list ${openMenu ? "active" : ""}`}>
                      <li>
                        <Link href="/catalog" className="hlnk">
                        Каталог
                        </Link>
                      </li>
                      <li>
                        <Link href="/patners" className="hlnk">
                        Партнерам
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="hlnk">
                        блог
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hlnk">
                        for kids
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hlnk close" onClick={() => setOpenMenu(false)}>
                        close
                        </Link>
                      </li>
                    </ul>
                     <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                      <img src="./img/menu.png" alt=""/>
                    </div>
                   </nav>
    )
}