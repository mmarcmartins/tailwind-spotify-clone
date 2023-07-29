import { HomeIcon, Library, Search } from "lucide-react";

const MenuActions = () => {
  return (
    <nav className="space-y-5">
      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
        <HomeIcon/>
        Home
      </a>
      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
      <Search/>
        Search
      </a>
      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
      <Library/>
        Your library
      </a>
    </nav> 
  );
};

export default MenuActions;