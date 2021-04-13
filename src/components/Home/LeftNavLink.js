const LeftNavLink = ({ linkData }) => {
  return (
    <div className="media links-bg p-2 rounded-left">
      <img src={linkData.imagePath} alt="" className="link-icon img-round" />
      <div className="media-body p-2">
        <h6>{linkData.titletext}</h6>
      </div>
    </div>
  );
};

export default LeftNavLink;
