export default function DynamicPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
