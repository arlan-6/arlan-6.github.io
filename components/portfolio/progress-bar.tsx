type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white ">
      <div
        className="h-full bg-primary transition-[width] duration-200"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
