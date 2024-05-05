interface PropTypes {
  label: string;
  href: string;
}

export const Link = ({ label, href }: PropTypes) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {label}
  </a>
);
