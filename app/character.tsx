import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scale = 0.6;

const raid_jokes = [
    "One day I’ll be rich enough that my watches won’t outvalue my car.",
    "I trade like I’m rich, but my wallet disagrees.",
    "If money grew on trees, I’d already own the forest.",
    "I love cars… mostly in video games, because gas prices are scary.",
    "At the gym, I lift… injuries.",
    "CS2 taught me two things: how to aim, and how to rage.",
    "I spend more time on Discord than in real life.",
    "I say I’m 176 cm… but only with shoes on.",
    "My chess strategy? Sacrifice everything, panic later.",
    "When I say I’m ‘grinding,’ it could mean the stock market, the gym… or just Discord VC.",
    "I dream of Lambos. My bank account dreams of stability.",
    "The only thing I’ve consistently built is a Steam library.",
    "My financial plan is basically: win one good trade, retire forever.",
    "Cars love me. Mostly in repair shops.",
    "I go to the gym to get stronger… and end up learning first aid.",
    "If Discord gave salaries, I’d be a millionaire already.",
    "I treat crypto like relationships… buy high, sell low, and cry in between.",
];
const kaylee_jokes = [
    "I’m 5'2, but my attitude is at least 6 foot.",
    "My cats run the house. I just pay the rent in kibble.",
    "Simba is basically the main character — I’m just the side quest.",
    "I started smoking at 13… because apparently patience isn’t my thing.",
    "My eyebrows have more personality than my whole face.",
    "Butter chicken? More like butter addiction.",
    "I go ice skating just to fall in style.",
    "Cooking with me is like Roblox — looks fun until everything explodes.",
    "Yes, my hair is curly. No, you can’t touch it.",
    "I workout… so I can carry all three cats at once.",
    "Roblox thinks I’m a kid, my lungs think I’m 40.",
    "5'2 means I can hide in the kitchen cabinet… with snacks.",
    "Every time I say I’ll quit smoking, my cats just roll their eyes.",
    "My Lebanese side says hummus, my South African side says braai. I say… both.",
    "I don’t chase boys, I chase butter chicken.",
    "I cook like Gordon Ramsay… if he only had a microwave.",
    "Ice skating is just me professionally falling in circles.",
    "My cats think they adopted me.",
    "Roblox is my second home. The first one is the jungle.",
    "I do workouts… then undo them with chicken.",
    "People say I have big eyebrows. I say they’re just bold.",
];

const raidMsg = "Welcome! Don’t mind me flexing this money bag… it’s just from selling half my watch collection. click to hear more about me";
const kayleeMsg = "Hi, I’m Kaylee… 5'2, powered by butter chicken, and carried by my cats. click to hear more about me";

export default function Character(props: { target: string }) {
    const [jokes, setJokes] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);
    const msgsContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.onclick = (e) => {
            setJokes(props.target == "raid" ? [...jokes, raid_jokes[count]] : [...jokes, kaylee_jokes[count]]);
            setCount(count + 1);
            setTimeout(() => msgsContainer.current && (msgsContainer.current.scrollTop = msgsContainer.current.scrollHeight), 50);
        };
    });

    function message(content: string) {
        return (
            <p key={content} className="msg bg2 p-2 rounded-2xl">
                {content}
            </p>
        );
    }

    return (
        <div className="character absolute left-1/2 top-1/2 -translate-1/2 flex">
            <Image className="img" width={512 * scale} height={768 * scale} alt="your character is shy" src={props.target == "raid" ? "/raid.png" : "/kaylee.png"} />
            <div ref={msgsContainer} className="msgs bg3 p-4 rounded-2xl overflow-y-auto flex flex-col gap-3.5 scrollbar-hide" style={{ width: 500, height: 768 * scale }}>
                {message(props.target == "raid" ? raidMsg : kayleeMsg)}
                {jokes.map((e) => e && message(e))}
            </div>
        </div>
    );
}
