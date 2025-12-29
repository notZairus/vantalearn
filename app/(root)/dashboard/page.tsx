const gridItems = [
  {
    col: 3,
    row: 2,
  },
  {
    col: 3,
    row: 2,
  },
  {
    col: 2,
    row: 5,
  },
  {
    col: 2,
    row: 5,
  },
  {
    col: 4,
    row: 3,
  },
  {
    col: 3,
    row: 2,
  },
  {
    col: 3,
    row: 2,
  },
];

const BentoGridItem = ({ col = 1, row = 1 }) => {
  return (
    <div
      className={`w-full h-full col-span-${col} row-span-${row} bg-card border-card-border border`}
    ></div>
  );
};

const page = async () => {
  return (
    <div className="w-full h-full">
      <div className="grid w-full h-full grid-cols-8 grid-rows-7 gap-4">
        {gridItems.map((item, index) => (
          <BentoGridItem key={index} col={item.col} row={item.row} />
        ))}
      </div>
    </div>
  );
};

export default page;
