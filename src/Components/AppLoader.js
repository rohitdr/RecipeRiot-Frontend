export default function AppLoader({
  text = "Loading....",
  height = "h-screen",
  spinnerHight="h-10",
  spinnerWidth="w-10",
}) {
  return (
    <div className={`${height} flex flex-col justify-center items-center gap-3`}>
      <div className={`${spinnerHight} ${spinnerWidth} border-4 border-gray-300 border-t-[#6159CB] rounded-full animate-spin`}></div>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  )
}