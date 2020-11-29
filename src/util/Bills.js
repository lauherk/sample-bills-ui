import React from "react";

const formatMeasureNumberForLink = measure => {
  let measureComps = measure.split(" ");
  const measureNo = getMeasureNumber(measure);
  const measureLink = measureComps[2].replace("(", "").replace(")", "");
  return <a href={measureLink}> {`${measureNo}`}</a>;
};

const getMeasureNumber = measure => {
  let measureComps = measure.split(" ");
  const measureNo = `${measureComps[0]}-${measureComps[1]}`;
  return measureNo;
};
const formatMeasureLetterForLink = measureLink => {
  if (measureLink) {
    let measureComps = measureLink.split(" ");
    const link = measureComps[1].replace("(", "").replace(")", "");
    return <a href={link}> {`${measureComps[0]}`}</a>;
  } else {
    return "";
  }
};

export { formatMeasureNumberForLink, formatMeasureLetterForLink, getMeasureNumber };
