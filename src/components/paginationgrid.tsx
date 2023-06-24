import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

interface PaginationProps {
    page: number;
    // setPage:
}

export default function Pagination(props: any) {
    const { page, setPage, count } = props;

    function clickForward() {
        setPage(page + 1);
    }

    function clickBack() {
        if (page !== 1) {
            setPage(page - 1);
        }
    }

    function clickPage(number: any) {
        setPage(number);
    }

    function onChangeValue(event: any) {
        console.log(event.target.value);
    }

    // const renderPages = () => {
    //     var rows = [];
    //     for (var i = 0; i < Math.ceil(count / 20); i++) {
    //         if (i + 3 >= page && i < page + 2) {

    //             if (page === i + 1) {
    //                 rows.push(<button
    //                     aria-current="page"
    //                     key={i}
    //                     className="cursor-default relative z-10 inline-flex items-center border border-gray-600 bg-gray-800 px-4 py-2 text-sm font-medium text-white focus:z-20"
    //                 >
    //                     {i + 1}
    //                 </button >)
    //             }
    //             else {
    //                 rows.push(<button
    //                     onClick={() => clickPage(i)}
    //                     key={i}
    //                     value={i}
    //                     aria-current="page"
    //                     className="relative z-10 inline-flex items-center border border-gray-600 hover:bg-gray-600 px-4 py-2 text-sm font-medium text-white focus:z-20"
    //                 >
    //                     {i + 1}
    //                 </button >)
    //             }
    //         }
    //     }

    //     return (rows)

    // }

    const renderPages = () => {
        return null;
    };

    return (
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 mt-3">
            <div className="flex flex-1 items-center justify-center">
                <div>
                    <nav
                        className=" isolate inline-flex -space-x-px rounded-md shadow-sm bg-gray-700 border-gray-600 text-white "
                        aria-label="Pagination"
                    >
                        <button
                            onClick={clickBack}
                            className="relative inline-flex items-center rounded-l-md border border-gray-600 px-2 py-2 text-sm font-medium hover:bg-gray-600 focus:z-20"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        {renderPages()}

                        <button
                            onClick={clickForward}
                            className="relative inline-flex items-center rounded-r-md border border-gray-600  px-2 py-2 text-sm font-medium hover:bg-gray-600 focus:z-20"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    </nav>
                    <div>
                        <p className="text-sm mt-3 text-white justify-center flex">
                            <div>
                                Showing{" "}
                                <span className="font-medium">
                                    {page === 1 ? page : (page - 1) * 20 + 1}
                                </span>{" "}
                                to{" "}
                                <span className="font-medium">
                                    {page * 20 < count ? page * 20 : count}
                                </span>{" "}
                                of <span className="font-medium">{count}</span>{" "}
                                monsters
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
