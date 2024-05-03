import MenuItem from "./MenuItem";

const Menu = () => {
    return (
        <div className="flex gap-16 justify-end">
            <MenuItem title="Projects"></MenuItem>
            <MenuItem title="Photos"></MenuItem>
            <MenuItem title="About"></MenuItem>
        </div>
    );
}

export default Menu;
