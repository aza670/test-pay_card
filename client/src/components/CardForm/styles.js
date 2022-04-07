import { css } from "glamor";

const styles = () =>
    css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "150px 0px 30px",
        position: "relative",
        " .creditCard": {
            background: "#000000",
            width: "380px",
            height: "200px",
            position: "absolute",
            top: "10%",
            left: 0,
            right: 0,
            margin: "auto",
            borderRadius: "10px",
            boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.2)",
            "&__front": {
                position: "relative",
                "&--background": {
                    width: "380px",
                    height: "200px",
                    borderRadius: "10px",
                    opacity: 0.6
                },
                "&__dataCard": {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    color: "#ffff",
                    top: 0,
                    left: 0,
                    "&__header": {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "&--chip": {
                            marginLeft: "20px",
                            width: "70px",
                            height: "70px"
                        },
                        "&--bank": {
                            width: "80px",
                            height: "20px",
                            marginRight: "20px"
                        }
                    },
                    "&__body": {
                        width: "100%",
                        height: "50px",
                        display: "flex",
                        fontSize: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                        " span": {
                            display: "flex",
                            height: "100%",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            ":not(:first-of-type)": {
                                marginLeft: "20px"
                            }
                        }
                    },
                    "&__footer": {
                        width: "100%",
                        height: "70px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "&--holder": {
                            marginLeft: "25px",
                            display: "flex",
                            height: "100%",
                            textAlign: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "end",
                            fontWeight: 900,
                            " h1": {
                                fontSize: "11px",
                                marginBottom: "5px",
                                opacity: 0.7
                            }
                        },
                        "&--expires": {
                            marginRight: "25px",
                            display: "flex",
                            height: "100%",
                            textAlign: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "end",
                            fontWeight: 900,
                            " h1": {
                                fontSize: "11px",
                                marginBottom: "5px",
                                opacity: 0.7
                            }
                        }
                    }
                }
            },
            "&__back": {
                position: "relative",
                "&--background": {
                    width: "380px",
                    height: "200px",
                    borderRadius: "10px",
                    opacity: 0.6
                },
                "&__dataCard": {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    color: "#ffff",
                    top: 0,
                    left: 0,
                    "&__header": {
                        width: "100%",
                        height: "40px",
                        background: "#000",
                        marginTop: "24px"
                    },
                    "&__body": {
                        width: "100%",
                        height: "50px",
                        display: "flex",
                        marginTop: "15px",
                        textAlign: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        fontWeight: 900,
                        " h1": {
                            fontSize: "11px",
                            marginBottom: "5px",
                            opacity: 0.7,
                            width: "90%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        },
                        " span": {
                            width: "90%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            background: "#ffff",
                            color: "#000000",
                            height: "25px"
                        }
                    },
                    "&__footer": {
                        width: "100%",
                        height: "70px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }
            }
        },
        " .cardForm": {
            background: "#ffff",
            width: "400px",
            padding: "140px 30px 30px",
            borderRadius: "10px",
            boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.2)",
            "&__error": {
                color: "red",
                fontSize: "10px"
            },
            " span": {
                fontSize: "12px",
                marginBottom: "5px"
            },
            " input": {
                border: "1px solid #dee2e9",
                borderRadius: "5px"
            },
            "&__number": {
                display: "flex",
                flexDirection: "column",
                " input": {
                    height: "35px"
                }
            },
            "&__name": {
                display: "flex",
                flexDirection: "column",
                margin: "15px 0px",
                " input": {
                    height: "35px"
                }
            },
            "&__expiration": {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                "&__date": {
                    display: "flex",
                    flexDirection: "column",
                    "&--dropdown": {
                        display: "flex",
                        width: "255px",
                        justifyContent: "space-between"
                    }
                },
                "&--cvv": {
                    display: "flex",
                    flexDirection: "column",
                    " input": {
                        width: "120px",
                        height: "35px"
                    }
                }
            },
            "&--submit": {
                marginTop: "30px",
                width: "100%",
                height: "40px",
                background: "#0366d6",
                border: "none",
                fontWeight: "700",
                fontSize: "15px",
                color: "#ffff",
                borderRadius: "5px"
            }
        }
    });

export default styles;
