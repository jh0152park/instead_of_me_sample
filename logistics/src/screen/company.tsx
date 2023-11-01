import { useEffect } from "react";
import { go_to_scroll_position } from "../utils/utils";
import TechnicalValueSea from "../components/company/technicalValueSea";
import TechnicalValueContainer from "../components/company/technicalValueContainer";

export default function Company() {
    useEffect(() => {
        go_to_scroll_position(0);
    }, []);

    return (
        <div>
            <TechnicalValueSea />
            <TechnicalValueContainer />
        </div>
    );
}
