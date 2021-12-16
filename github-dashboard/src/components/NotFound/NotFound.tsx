import elmo from "../../assets/elmo.gif";

export const NotFound = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "20vh",
      }}
    >
      <div>We tried our best</div>
      <img
        src={elmo}
        alt="Elmo GIF"
        style={{
          width: "70%",
          marginTop: "3vh",
          borderRadius: "16px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      />
    </div>
  );
};
