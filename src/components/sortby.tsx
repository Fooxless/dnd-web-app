import React from "react";
import DropDown from './dropdown'

const sortOptions = [
    { name: "No Sort", value: "" },
    { name: "Name (A-Z)", value: "name" },
    { name: "Type", value: "type" },
    { name: "Alignment", value: "alignment" },
    { name: "HP (High)", value: "-hit_points" },
    { name: "HP (Low)", value: "hit_points" },
    // { name: "CR (High)", value: "challange_rating" },
];

export interface Props {
    setSortby: (newValue: any) => void;
}

export default function Sorter(props: any) {
    const { setSortby } = props;

    return (

        <div className="flex items-center space-x-2 ">
            <DropDown defaultValue="Sort" options={sortOptions}
                setSortby={setSortby}
            />
        </div>


    )
}