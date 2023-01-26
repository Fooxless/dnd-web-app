import React from "react";
import DropDown from './dropdown'

const sortOptions = [
    { name: "No Sort", value: "" },
    { name: "Price (High)", value: "price_high" },
    { name: "Price (Low)", value: "price_low" },
    { name: "Name (A-Z)", value: "name" }
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