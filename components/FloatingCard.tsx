type Props = {
  title: string;
  subtitle: string;
};

export default function FloatingCard({
  title,
  subtitle,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-[22px]
      px-4
      py-3
      w-[170px]
      shadow-[0_12px_30px_rgba(0,0,0,0.08)]
      "
    >
      <h3
        className="
        text-[15px]
        font-medium
        leading-tight
        text-black
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-1
        text-[13px]
        text-gray-500
        leading-tight
        "
      >
        {subtitle}
      </p>
    </div>
  );
}