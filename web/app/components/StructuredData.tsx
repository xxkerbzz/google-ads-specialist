interface StructuredDataProps {
  data: Record<string, unknown> | null;
}

export default function StructuredData({ data }: StructuredDataProps) {
  if (!data) return null;

  const structuredData = {
    '@context': 'https://schema.org',
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

