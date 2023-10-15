export type Monster = {
    actions: MonsterAction[];
    alignment: string;
    armor_class: number;
    armor_desc: string;
    challenge_rating: string;
    charisma: number;
    charisma_save: number;
    condition_immunities: string;
    constitution: number;
    constitution_save: number;
    cr: number;
    damage_immunities: string;
    damage_resistances: string;
    damage_vulnerabilities: string;
    desc: string;
    dexterity: number;
    dexterity_save: number;
    document__license_url: string;
    document__slug: string;
    document__title: string;
    document__url: string;
    environments: any[]; // figure out
    group: null; // figure out
    hit_dice: string;
    hit_points: number;
    img_main: null; // figure out
    intelligence: number;
    intelligence_save: number;
    languages: string;
    legendary_actions: LegendaryAction[];
    legendary_desc: string;
    name: string;
    page_no: number;
    perception: number; // figure out
    reactions: string;
    senses: string;
    size: string;
    skills: Skills; // figure out
    slug: string;
    special_abilities: SpecialAbility[];
    speed: Speed;
    spell_list: string[];
    strength: number;
    strength_save: number;
    subtype: string;
    type: string;
    wisdom: number;
    wisdom_save: number;
};

export type MonsterAction = {
    desc: string;
    name: string;
};

export type LegendaryAction = {
    desc: string;
    name: string;
};

export type SpecialAbility = {
    desc: string;
    name: string;
};

export type Speed = {
    walk: number;
    burrow: number;
    fly: number;
    swim: number;
};

export type Skills = {
    // Will need to add to this!
    arcana: number;
    history: number;
};

export type Spell = {
    slug: string;
    name: string;
    desc: string;
    higher_level: string;
    page: string;
    range: string;
    target_range_sort: number;
    components: string;
    requires_verbal_components: boolean;
    requires_somatic_components: boolean;
    requires_material_components: boolean;
    material: string;
    can_be_cast_as_ritual: boolean;
    ritual: string;
    duration: string;
    concentration: string;
    requires_concentration: boolean;
    casting_time: string;
    level: string;
    level_int: number;
    spell_level: number;
    school: string;
    dnd_class: string;
    spell_lists: string[];
    archetype: string;
    circles: string;
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
};
