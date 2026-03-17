export default function BackgroundDecorations() {
    const icons = [
        { icon: "favorite", size: "text-8xl", pos: "top-[10%] left-[5%]", r: "12deg", delay: "0s" },
        { icon: "star", size: "text-6xl", pos: "top-[40%] left-[2%]", r: "-12deg", delay: "1s" },
        { icon: "favorite", size: "text-9xl", pos: "top-[70%] left-[8%]", r: "45deg", delay: "2s" },
        { icon: "star", size: "text-7xl", pos: "top-[15%] right-[5%]", r: "-6deg", delay: "0.5s" },
        { icon: "favorite", size: "text-9xl", pos: "top-[50%] right-[3%]", r: "12deg", delay: "1.5s" },
        { icon: "star", size: "text-5xl", pos: "top-[80%] right-[10%]", r: "-45deg", delay: "3s" },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden select-none">
            {icons.map((item, i) => (
                <span
                    key={i}
                    className={`material-symbols-outlined absolute text-primary/10 ${item.size} ${item.pos} animate-float`}
                    style={
                        {
                            "--r": item.r,
                            animationDelay: item.delay,
                        } as React.CSSProperties
                    }
                >
                    {item.icon}
                </span>
            ))}
        </div>
    );
}
