import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles";

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.hideList = this.hideList.bind(this);
        this.hideOnOutClick = this.hideOnOutClick.bind(this);
        const defaultItem = props.listItems.find(
            i => i[props.id] === props.defaultItem
        );
        this.me = React.createRef();
        this.state = {
            clicked: false,
            selectedItem: defaultItem ? defaultItem[props.value] : ""
        };
    }

    componentDidMount() {
        window.addEventListener("resize", () => this.hideList(false));
        window.addEventListener("click", this.hideOnOutClick);
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.listItems !== this.props.listItems ||
            (nextProps.reset !== this.props.reset && nextProps.reset)
        ) {
            const defaultItem = nextProps.listItems.find(
                i => i[this.props.id] === nextProps.defaultItem
            );
            this.setState({
                clicked: false,
                selectedItem: defaultItem ? defaultItem[nextProps.value] : ""
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", () => this.hideList(false));
        window.removeEventListener("click", this.hideOnOutClick);
    }

    hideOnOutClick(e) {
        if (!this.me.current.contains(e.target)) {
            this.hideList(false);
        }
    }

    hideList(setValue = null) {
        this.setState({
            clicked: setValue === null ? !this.state.clicked : setValue
        });
    }

    handleOnClick(item) {
        this.props.onClick(item);
        this.setState({
            selectedItem: item[this.props.value]
        });
    }

    render() {
        const { clicked, selectedItem } = this.state;
        const { listItems } = this.props;
        const visible = clicked === false ? "closed" : "opened";

        return (
            <div
                {...styles(this.props)}
                ref={this.me}
                className={`select select--${visible}`}
            >
                <button onClick={() => this.hideList()} type="button">{selectedItem}</button>
                <ul>
                    {listItems.map((item, idx) => (
                        <li key={idx}>
                            <button
                                onClick={() => {
                                    this.handleOnClick(item);
                                    this.hideList();
                                }}
                                type="button"
                            >
                                {item[this.props.value]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Dropdown.propTypes = {
    onClick: PropTypes.func,
    listItems: PropTypes.array,
    children: PropTypes.any,
    id: PropTypes.string,
    value: PropTypes.string,
    defaultItem: PropTypes.any,
    listBgColor: PropTypes.string,
    itemHoverColor: PropTypes.string,
    arrowColor: PropTypes.string
};

Dropdown.defaultProps = {
    onClick: () => ({}),
    id: "id",
    value: "value",
    defaultItem: -1,
    children: "Click me!",
    listBgColor: "#000",
    itemHoverColor: "#555",
    arrowColor: "#f5f5f5",
    listItems: [{ label: "Menu 1", id: "menu1" }]
};

export default Dropdown;
