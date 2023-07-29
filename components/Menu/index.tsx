import WindowControll from "./WindowControll";
import MenuActions from "./MenuActions";
import Playlists from "./Playlists";

const Menu = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <WindowControll/>
      <MenuActions/>
      <Playlists/>
    </aside>
  );
};

export default Menu;