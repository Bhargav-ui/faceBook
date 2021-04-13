import { useState } from "react";
import barghav from "../../images/barghav.jpg";
import LeftNavLink from "./LeftNavLink";



const Links = () => {
  const [linksData, setLinksdata] = useState([
    {
      imagePath:
        "https://scontent.fhyd1-2.fna.fbcdn.net/v/t1.6435-1/cp0/c14.0.86.86a/p86x86/48384456_2537519412984825_3925785028360929280_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=F3up3sZnPRcAX9hPAQz&_nc_ht=scontent.fhyd1-2.fna&tp=27&oh=c9b141147f1460d0753b886eba553610&oe=609843A5",
      titletext: "AnjiReddy Akkala",
    },
    {
      imagePath: "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png",
      titletext: "COVID-19 information",
    },
  ]);
  return (
    <>
      {linksData.map((link, i) => (
        <LeftNavLink linkData={link} key={i} />
      ))}
    </>
  );
};

export default Links;
