import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export interface FilterOption {
    name: string;
    value: string;
}


interface FilterProps {
    defaultValue: string;
    options: FilterOption[];
    setSortby: (newValue: any) => void;
}

function Filter({ defaultValue, options, setSortby }: FilterProps) {
    const [open, setOpen] = useState(false);
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const handleClick = (value: string, name: string) => {
        setSortby(value)
        setCurrentValue(name)
    }

    return (
        <button
            className="relative"
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}

        >
            <div className="flex items-center justify-start gap-2 w-36">
                <span>{currentValue}</span>
                {open ? (
                    <ChevronUpIcon className="h-5 w-5" />
                ) : (
                    <ChevronDownIcon className="h-5 w-5" />
                )}
            </div>
            {open && (
                <>
                    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 opacity-20 cursor-default " ></div>
                    <div className=" absolute flex flex-col items-start top-6 z-20 bg-zamber-light rounded-md drop-shadow-2xl dark:bg-gray-900 p-1">
                        {options.map((option) => (
                            <div
                                className={`w-full flex justify-start dark:bg-gray-900 mt-1 hover:bg-gray-800 p-2 rounded-md`}
                                onClick={() => handleClick(option.value, option.name)}
                                key={option.value}
                            >
                                <p className="text-sm">{option.name}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </button>
    );
}

export default Filter;
