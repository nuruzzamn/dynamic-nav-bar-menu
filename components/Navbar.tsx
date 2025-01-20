"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface MenuItem {
  id: number;
  title: string;
  route?: string; 
  children?: MenuItem[] | undefined;
}

const Navbar = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const router = useRouter();

  // Fetch the menu data from the local JSON API
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/menu");
        const { menu } = await response.json();
        setMenuData(menu);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenu();
  }, []);

  const toggleMenu = (menuId: number) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (subMenuId: number) => {
    setOpenSubMenu(openSubMenu === subMenuId ? null : subMenuId);
  };

  const handleNavigation = (route?: string) => {
    if (route) {
      router.push(route);
    }
  };

//   console.log(menuData);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Home
        </Link>
        <ul className="flex space-x-6">
          {menuData.map((menu) => (
            <li key={menu.id} className="relative">
              <button
                onClick={() => {
                  toggleMenu(menu.id);
                  if (menu.children?.length === 0) {
                    handleNavigation(menu.route);
                  }
                }}
                className="hover:text-gray-300"
              >
                {menu.title}
              </button>
              {openMenu === menu.id && menu.children && menu.children?.length > 0 && (
                <ul className="absolute left-0 mt-2 w-40 bg-gray-700 rounded shadow-lg">
                  {menu.children.map((child) => (
                    <li
                      key={child.id}
                      className="hover:bg-gray-600 p-2 relative"
                    >
                      {child.children?.length ? (
                        <>
                          <button
                            onClick={() => toggleSubMenu(child.id)}
                            className="w-full text-left"
                          >
                            {child.title}
                          </button>
                          {openSubMenu === child.id && (
                            <ul className="absolute right-full top-0 mt-0 w-40 mx-1 bg-gray-600 rounded shadow-lg">
                              {child.children.map((subChild) => (
                                <li
                                  key={subChild.id}
                                  className="hover:bg-gray-500 p-2 cursor-pointer"
                                  onClick={() =>
                                    handleNavigation(subChild.route)
                                  }
                                >
                                  {subChild.title}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <span
                          onClick={() => handleNavigation(child.route)}
                          className="cursor-pointer"
                        >
                          {child.title}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
