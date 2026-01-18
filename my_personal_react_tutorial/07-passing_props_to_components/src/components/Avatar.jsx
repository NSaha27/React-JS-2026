import "./css/avatar.css";

function Avatar({ pImgFileName, imgName, size }) {
  return (
    <img
      src={`images/${pImgFileName}`}
      alt={imgName}
      className="avatar-img"
      width={size}
      height={size}
    />
  );
}

export default Avatar;
