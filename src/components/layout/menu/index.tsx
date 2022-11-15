import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <aside className="colum is-2 is-narrow-mobile is-fullheight section is hidden-mobbile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <MenuItem href="/" label="Home" />
                <MenuItem href="/" label="Configurações" />
                <MenuItem href="/" label="Cadastros" />
            </ul>
        </aside>
    )
}
interface MenuItemProps {
    href: string;
    label: string;

}
const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
    return (
        <li>
            <Link legacyBehavior href = {props.href}>
                <a>
                    <span className="icon"></span>{props.label}
                </a>
            </Link >
        </li>
    )
}