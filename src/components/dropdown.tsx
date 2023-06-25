import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
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

function Filter({ options, setSortby }: FilterProps) {
    const [currentValue, setCurrentValue] = useState("");

    const handleClick = (event: SelectChangeEvent) => {
        setSortby(event.target.value);
        setCurrentValue(event.target.value);
    };

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel
                    sx={{
                        color: "white",
                        top: -7,
                    }}
                    variant="outlined"
                    focused={false}
                >
                    Sort
                </InputLabel>
                <Select
                    value={currentValue}
                    onChange={handleClick}
                    sx={{
                        color: "white",
                        background: "#404958",
                        border: 0,
                        borderRadius: 20,
                        width: "fit-content",
                        minWidth: 80,
                        height: 40,
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiSvgIcon-root": {
                            color: "white",
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.name} value={option.value}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Filter;
