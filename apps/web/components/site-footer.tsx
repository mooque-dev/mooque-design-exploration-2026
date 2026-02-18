export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground md:px-6">
        <p>
          Built with intention.{" "}
          <span className="font-medium text-foreground">Mooque</span> — Design
          Exploration {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
