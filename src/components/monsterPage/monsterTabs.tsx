import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface CenteredTabsProps {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function CenteredTabs({ value, setValue }: CenteredTabsProps) {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="inherit"
            TabIndicatorProps={{
                style: {
                    backgroundColor: "#5d7bad",
                },
            }}
        >
            <Tab label="Stats" />
            <Tab label="Actions" />
            <Tab label="Spells" />
        </Tabs>
    );
}
