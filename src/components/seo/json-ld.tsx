type JsonLdProps = {
  data: object;
};

/** Renders schema.org JSON-LD without a client bundle. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
