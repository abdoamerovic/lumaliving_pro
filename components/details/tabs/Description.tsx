export default function Description({ description }: { description: string }) {
  return (
    <div className="mx-auto max-w-7xl py-12">
      <h4 className="text-[#4a4a4a] text-sm lg:text-base">
        {description}
      </h4>
    </div>
  );
}