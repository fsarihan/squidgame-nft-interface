import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
    styles: {
        global: {
            body: {
                bg: "#1A202C",
                color: "white",
            },
        },
    },
    fonts: {
        heading: "Orbitron",
        body: "Orbitron",

    },
    colors: {
        squid: {
            100: "#fe3477",
            200: "#ea4884",
        },
    },
});
