
export default function ExportCanvasSection() {
    return (

        <div
            id="export-canvas"
            className="relative flex items-center justify-center bg-transparent w-300 h-200"
        // style={{
        //     width: '1200px',
        //     height: '800px',
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     background: 'transparent'
        // }}
        >
            {/* YOUR EXACT CARD CODE STAYS UNTOUCHED */}
            <div
                className="z-20 flex flex-col gap-20 border rounded-sm shadow-2xl w-161.75 h-100 border-border bg-background"
                // className="z-20 grid gap-6 p-6 border rounded-sm shadow-2xl w-161.75 h-100 border-border bg-background"
                // className="z-20 flex flex-col border rounded-sm shadow-2xl w-161.75 h-100 border-border bg-background"
            >

                {/* bootom card */}

                {/* <div className="flex items-center h-10 gap-2 px-4 rounded-sm top-banner bg-border">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <h2 className="ml-auto font-mono text-xs text-[#6b7280]">
                        architecture.rs
                    </h2>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed content text-foreground">
                    <div>
                        <span className="text-deep-violet">impl</span><span className="text-electric-blue"> Database </span>{"{"}
                    </div>
                    <div className="mt-2 ml-4">
                        <span className="text-deep-violet">pub async fn</span><span className="text-green-text"> execute_query</span>{"(&"}<span className="text-deep-violet">self</span>{") ->"}<span className="text-electric-blue"> Result</span>{"<"}<span className="text-electric-blue">Vec</span>{"<"}<span className="text-electric-blue">Row</span>{">> {"}
                    </div>
                    <div className="mt-2 ml-8">
                        <span className="text-deep-violet">let</span> connection =<span className="text-deep-violet"> self</span>{".pool.acquire()."}<span className="text-green-text">await</span>{"?;"}
                    </div>
                    <div className="mt-2 ml-8">
                        <span className="text-deep-violet">connection</span>.<span className="text-green-text">query</span>(<span className="text-green-text">self</span>.sql).<span className="text-green-text">await</span>
                    </div>
                    <div className="mt-2 ml-4">
                        {"}"}
                    </div>
                    <div className="mt-2">
                        {"}"}
                    </div>
                </div> */}

                {/* middle card */}
                {/* <div
                    className="flex items-center justify-between col-span-2 pb-4 mb-6 border-b top-banner border-border"
                >
                    <h2
                        className="font-mono text-xs tracking-[0.16em] text-foreground uppercase"
                    >
                        Network Layer
                    </h2>
                    <div
                        className="w-2 h-2 rounded-none bg-deep-violet"
                    />
                </div>
                <div className="col-span-1 p-4 border rounded-sm border-border">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                        Server Status
                    </p>
                    <p className="mt-4 font-mono text-2xl text-green-text">
                        99.98%
                    </p>
                    <p className="mt-4 font-mono text-xs text-[#6b7280]">
                        Last 30 days
                    </p>
                </div>
                <div className="col-span-1 p-4 border rounded-sm border-border">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                        Server Status
                    </p>
                    <p className="mt-4 font-mono text-2xl text-electric-blue">
                        84ms
                    </p>
                    <p className="mt-4 font-mono text-xs text-[#6b7280]">
                        Database query
                    </p>
                </div>
                <div className="col-span-2 p-4 border rounded-sm border-border">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-[#6b7280] uppercase">
                        Request Volume
                    </p>
                    <div className="flex items-end h-16 gap-2 mt-4">
                        <div className="flex-1 rounded-sm h-4/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                        <div className="flex-1 rounded-sm h-7/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                        <div className="flex-1 rounded-sm h-5/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                        <div className="flex-1 rounded-sm h-8/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                        <div className="flex-1 rounded-sm h-6/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                        <div className="flex-1 rounded-sm h-9/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                        <div className="flex-1 rounded-sm h-7/10 bg-linear-to-t from-electric-blue to-deep-violet" />
                    </div>
                </div> */}


                {/* top card */}
                {/* <div
                    className="flex items-center justify-between pb-1 m-6 border-b top-banner border-border"
                >
                    <h2
                        className="font-mono text-xs tracking-[0.16em] text-foreground uppercase"
                    >
                        Compiled Stack
                    </h2>
                    <div
                        className="flex items-center gap-1"
                    >
                        <div className="w-2 h-2 rounded-none bg-electric-blue" />
                        <div className="w-2 h-2 rounded-none bg-deep-violet" />
                    </div>
                </div>
                <div className="flex flex-col flex-1 w-full p-6 content">
                    <table
                        className="w-full text-[9px] font-mono border-collapse text-muted-foreground"
                    >
                        <thead>
                            <tr
                            >
                                <th
                                    className="font-normal text-deep-violet tracking-[0.12em] pb-5 text-left border-b border-border/50"
                                >
                                    Component
                                </th>
                                <th
                                    className="font-normal text-electric-blue tracking-[0.12em] pb-5 text-left border-b border-border/50"
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className="border-b border-border"
                            >
                                <td
                                    className="py-2 text-foreground"
                                >
                                    Frontend runtime
                                </td>
                                <td
                                    className="py-2"
                                >
                                    <span
                                        className="text-green-text me-2"
                                    >
                                        ✓
                                    </span>
                                    Operational
                                </td>
                            </tr>
                            <tr
                                className="border-b border-border"
                            >
                                <td
                                    className="py-2 text-foreground"
                                >
                                    Database Layer
                                </td>
                                <td
                                    className="py-2"
                                >
                                    <span
                                        className="text-green-text me-2"
                                    >
                                        ✓
                                    </span>
                                    Operational
                                </td>
                            </tr>
                            <tr
                                className="border-b border-border"
                            >
                                <td
                                    className="py-2 text-foreground"
                                >
                                    Message Queue
                                </td>
                                <td
                                    className="py-2"
                                >
                                    <span
                                        className="text-green-text me-2"
                                    >
                                        ✓
                                    </span>
                                    Operational
                                </td>
                            </tr>
                            <tr
                                className="border-b border-border"
                            >
                                <td
                                    className="py-2 text-foreground"
                                >
                                    Cache Layer
                                </td>
                                <td
                                    className="py-2"
                                >
                                    <span
                                        className="text-green-text me-2"
                                    >
                                        ✓
                                    </span>
                                    Operational
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <div
                        className="pt-3 mt-auto border-t border-border"
                    >
                        <p
                            className="text-[8px] text-muted-foreground tracking-wide"
                        >
                            Systems operational • Zero degradation
                        </p>
                    </div>
                </div> */}

            </div>
        </div>
    )
}