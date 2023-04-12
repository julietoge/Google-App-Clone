import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import './assets/style.css';
import AppsLauncherIcon from "./AppsLauncherIcon";

const HeaderComponent = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <MenuItem MenuText={"Gmail"} /> 
        <MenuItem MenuText={"Images"} />
        <AppsLauncherIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default HeaderComponent;
