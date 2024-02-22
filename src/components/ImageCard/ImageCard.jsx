export const ImageCard = ({
  item: {
    alt_description,
    urls: { small },
  },
}) => {
  return <img src={small} alt={alt_description} />;
};
