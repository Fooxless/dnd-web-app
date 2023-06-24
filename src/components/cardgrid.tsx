import Card from "./card";

interface CardGridProps {
    monsters: any;
}

export default function CardGrid({ monsters }: CardGridProps) {
    if (!monsters) return null;
    console.log("monsters", monsters);
    return (
        <div className="grid items-grid gap-8 px-6 place-items-center pt-8">
            {monsters?.results?.map((monster: any) => (
                <div key={monster?.name}>
                    {monster && <Card key={monster?.name} monster={monster} />}
                </div>
            ))}
        </div>
    );
}
