"use client";
import Character from "./character";
import { useEffect, useRef, useState } from "react";

export default function Page() {
    const pussy = useRef<HTMLButtonElement>(null);
    const brave = useRef<HTMLButtonElement>(null);
    const disclaimer = useRef<HTMLDivElement>(null);
    const identity = useRef<HTMLDivElement>(null);
    const raid = useRef<HTMLButtonElement>(null);
    const kaylee = useRef<HTMLButtonElement>(null);

    const [GTFO, setGTFO] = useState<boolean>(false);
    const [cool, setCool] = useState<boolean>(false);
    const [kid, setKid] = useState<string>("idk");

    // useEffect(() => {

    // }, [kid, cool, GTFO]);

    return GTFO ? (
        <p className="gtfo text_big fixed left-1/2 top-1/2 -translate-1/2 text-red-500">
            you are boring <br /> get the fuck out
        </p>
    ) : !cool ? (
        <div ref={disclaimer} className="container flex justify-center items-center">
            <div className="disclaimer fixed left-1/2 top-1/2 -translate-1/2 bg3 flex flex-col justify-center items-center gap-4 p-5">
                <h1 className="title text_large text-red-600 font-bold">Disclaimer</h1>
                <h3 className="description">all of this is just for fun nothing serious c:</h3>

                <button ref={brave} onClick={() => setCool(true)} className="btn">
                    Yeah im fine
                </button>
                <button ref={pussy} onClick={() => setGTFO(true)} className="btn">
                    No im scared
                </button>
            </div>
        </div>
    ) : // roasting part
    kid == "kaylee" || kid == "raid" ? (
        <Character target={kid} />
    ) : (
        <div>
            <div ref={identity} className="container flex justify-center items-center">
                <div className="identity fixed left-1/2 top-1/2 -translate-1/2 bg3 flex flex-col justify-center items-center gap-4 p-5">
                    <h1 className="title text_large text-lime-600 font-bold">Thats what im talking about you</h1>
                    <h3 className="description">So who are you?</h3>

                    <button ref={raid} onClick={() => setKid("raid")} className="btn">
                        Raid
                    </button>
                    <button ref={kaylee} onClick={() => setKid("kaylee")} className="btn">
                        Kaylee
                    </button>
                </div>
            </div>
        </div>
    );
}
