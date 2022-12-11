import React from "react";

export interface Props {
    setSortby: (newValue: any) => void;
}

function Sorter(props: any) {
    return (
        <div className="flex items-center space-x-2" >
            Navbar here
        </div>
    );
}

export default Sorter;