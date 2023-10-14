import { Monster } from "../../../types/types";

interface SavingThrowsProps {
    monster: Monster;
}

export default function SavingThrows({ monster }: SavingThrowsProps) {
    const savingThrows = [];

    monster.strength_save !== null &&
        savingThrows.push(`Str +${monster.strength_save}`);
    monster.dexterity_save !== null &&
        savingThrows.push(`Dex +${monster.dexterity_save}`);
    monster.constitution_save !== null &&
        savingThrows.push(`Con +${monster.constitution_save}`);
    monster.intelligence_save !== null &&
        savingThrows.push(`Int +${monster.intelligence_save}`);
    monster.wisdom_save !== null &&
        savingThrows.push(`Wis +${monster.wisdom_save}`);
    monster.charisma_save !== null &&
        savingThrows.push(`Cha +${monster.charisma_save}`);

    return savingThrows;
}
