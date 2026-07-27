import Icon from "../ui/icon";

export default function Header() {
    return (
        <header>
            <div className="container bg-[#030712]">
                <div className="logo flex items-center">
                    <Icon className="icon w-10 h-10" />
                    <div className="title">
                        <span className="uppercase text-white text-sm font-mono">
                            CodeTier Systems
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};