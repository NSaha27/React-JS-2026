function AccordionItem({
  sl,
  title,
  onSetActiveAccord,
  activeAccord,
  children,
}) {
  const isActive = sl === activeAccord;
  const handleClick = () => {
    onSetActiveAccord(isActive ? null : sl);
  };
  return (
    <div className={`min-h-15 flex flex-col  pt-3`} onClick={handleClick}>
      <div
        className={`flex flex-row justify-between gap-6 p-2 font-bold text-lg text-gray-700 bg-green-100 ${isActive && "text-green-700"}`}
      >
        <p className="text-center text-gray-400">{sl}</p>
        <p className="text-center">{title}</p>
        <p className="text-center">{isActive ? "-" : "+"}</p>
      </div>
      {isActive && (
        <div
          className={`mx-auto max-w-2xl text-justify pt-2 pb-6 text-gray-800`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
