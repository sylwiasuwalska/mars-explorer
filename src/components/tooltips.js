import React from "react";
import {Tooltip} from "react-bootstrap";

export const renderTooltipForAdding = (props) => {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Add to favourite
        </Tooltip>
    );
}