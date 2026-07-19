// Pass-through root layout. The real <html>/<body> live in [locale]/layout.tsx
// (which needs the locale to set lang/dir) and in the root not-found page.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
