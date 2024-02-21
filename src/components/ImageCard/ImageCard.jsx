export const ImageCard = ({
  item: {
    alt_description,
    urls: { small },
    likes,
  },
}) => {
  return <img src={small} alt={alt_description} likes={likes} />;
};
