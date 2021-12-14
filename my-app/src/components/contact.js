import {
    makeStyles,
  } from "@material-ui/core";

  const useStyles = makeStyles(() => ({
    content: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
}))

export default function Contact(){
    const { content } = useStyles();
    return (
          <div className={content}> Contact</div>)
};