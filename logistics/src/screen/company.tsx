import { useEffect } from "react";
import { go_to_scroll_position } from "../utils/utils";
import TechnicalValueSea from "../components/company/technicalValueSea";

export default function Company() {
    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            <TechnicalValueSea />
        </div>
    );
}
