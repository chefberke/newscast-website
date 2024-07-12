function Stack({ technology }: any) {
  return (
    <div className="mt-2">
      <div className="bg-gray-100 rounded px-2 text-gray-950 h-[1.3rem] text-[0.7rem] flex items-center">
        {technology}
      </div>
    </div>
  );
}

export default Stack;
