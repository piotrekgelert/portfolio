interface PropTypes {
  url: string;
  label: string;
}

export const Image = ({ url, label }: PropTypes) => (
  <img src={url} alt={`${label} project example image`} />
);
