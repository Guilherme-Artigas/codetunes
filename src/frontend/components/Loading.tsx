export default function Loading() {

  return (
    <div className="flex h-[75vh] items-center justify-center w-full">
      <div
        className={`
          animate-spin
          border-4
          border-t-[#003BE5]
          h-10
          w-10
          rounded-full
        `}
      />
    </div>
  );
}
