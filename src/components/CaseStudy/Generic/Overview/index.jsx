import React from "react";
import Feature from "../Feature";
import Problem from "../Problem";

/**
 * @param {Object} props
 * @param {string} props.title 
 * @param {React.ReactNode} props.caption 
 * @param {string} props.detail 
 * @param {string} props.imageSrc 
 * @param {Object} props.problemData 
 * @param {string} props.problemData.title 
 * @param {string} props.problemData.text 
 * @param {string} props.problemData.frameImageSrc 
 */
const Overview = ({
  title = "Overview",
  caption,
  detail,
  imageSrc,
  problemData,
}) => {
  return (
    <>
      <Feature
        left={false}
        overview={true}
        title={title}
        caption={caption}
        detail={detail}
        img={imageSrc}
      />
      {problemData && (
        <Problem
          title={problemData.title}
          text={problemData.text}
          frameImageSrc={problemData.frameImageSrc}
        />
      )}
    </>
  );
};

export default Overview;
