import { css } from "glamor";

export default props => {
    const listcolor = props.listBgColor;
    const hoverColor = props.itemHoverColor;
    const textcolor = props.textColor;
    const arrowcolor = props.arrowColor;

    return css({
        ".select": {
            position: "relative",
            height: "40px",
            background: listcolor,
            border: "1px solid #dee2e9",
            borderRadius: "5px",
            "&--opened": {
                " > ul": {
                    top: "100%",
                    transform: "scale(1)",
                    opacity: 1,
                    transition: "all 0.25s ease, opacity 0.15s ease 0.10s"
                },
                " > button:after": { transform: "translate(0, -50%) rotate(180deg)" }
            },
            "&--closed": {
                " > ul": {
                    top: "0px",
                    transform: "scale(0)",
                    opacity: 0,
                    transition: "all 0.20s ease"
                },
                " > div": {
                    " > div": {
                        visibility: "hidden"
                    }
                },
                " > button:after": { transform: "translate(0, -50%) rotate(0deg)" }
            },
            " button": {
                width: 120,
                height: 40,
                color: textcolor,
                border: "none",
                outline: "none",
                paddingLeft: 16,
                textAlign: "left",
                position: "relative",
                backgroundColor: listcolor,
                fontSize: "14px",
                fontFamily: "Roboto, sans-serif",
                cursor: "pointer",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            },
            " > button": {
                padding: "0px 25px 0px 16px",
                background: "rgba(255, 255, 255, 0.1)"
            },
            " > button:after": {
                content: '""',
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "5px solid red",
                borderTopColor: arrowcolor,
                position: "absolute",
                top: "50%",
                right: 10,
                transition: "transform 0.5s ease"
            },
            " ul": {
                position: "absolute",
                zIndex: 2,
                left: "0px",
                maxHeight: "150px",
                margin: "0",
                padding: "0",
                listStyleType: "none",
                transformOrigin: "0px 0px",
                overflow: "auto",
                " button": {
                    backgroundColor: listcolor,
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
                    fontWeight: 500
                },
                " button:hover": {
                    background: hoverColor
                }
            },
            " .extraClass": {
                fontSize: "9px",
                opacity: "0.5",
                padding: " 8px 8px"
            }
        }
    });
};
