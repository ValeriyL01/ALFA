interface LikeProps {
  isLiked: boolean;
}

export const Like: React.FC<LikeProps> = ({ isLiked }) => {
  return (
    <svg
      className="svg-icon"
      style={{
        width: "2em",
        height: "2em",
        verticalAlign: "middle",
        fill: `${isLiked ? "#e25555" : "currentcolor"} `,
        overflow: "hidden",
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 928C282.25 928 96 741.75 96 512S282.25 96 512 96s416 186.25 416 416-186.25 416-416 416z m181.096-340.866l45.254-45.255c49.438-49.82 49.163-130.443-0.706-180.312s-130.491-50.144-180.312-0.706v-0.001l-45.256 45.255-45.255-45.254c-49.82-49.438-130.443-49.163-180.311 0.706-49.87 49.869-50.145 130.491-0.707 180.312l45.254 45.255 181.02 181.02 181.02-181.02z" />
    </svg>
  );
};
