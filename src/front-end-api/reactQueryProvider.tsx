import { Box, CircularProgress } from "@mui/material";
import { PropsWithChildren } from "react";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

interface QueryStateIndicatorProps {
    isLoading: boolean;
}

export const QueryStateIndicator = ({
    isLoading,
    children,
}: PropsWithChildren<QueryStateIndicatorProps>) => {
    // Need new spinner
    // https://www.flowbite-react.com/docs/getting-started/introduction
    // Look at including the above in this project.
    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 20 }}>
                <CircularProgress size={100} />
            </Box>
        );
    }

    return <>{children}</>;
};
