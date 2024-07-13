import { Helmet } from 'react-helmet-async';

interface HelmetProps {
  title: string;
  description?: string;
  keywords?: string;
}

export const useHelmet = ({ title, description, keywords }: HelmetProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};
