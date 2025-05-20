
const HeadingCard = () => {
  return (
    <div className="border-b bg-primary-100 rounded-t-lg shadow-lg">
      
        <div className="flex p-4 justify-between gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-primary-900">Show</h1>
            <select
              name="entries"
              id="entries"
              className="p-1 border rounded-md focus:border-b-4 focus:border-b-primary-900 focus:ring-0"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <h1 className="text-primary-900">entries</h1>
          </div>
          <div className="flex items-center gap-2 mt-2 lg:mt-0">
            <h1 className="text-primary-900 text-center lg:text-start">Search:</h1>
            <input
              type="text"
              className="p-1 border rounded focus:border-b-4 focus:border-b-primary-900 focus:ring-0"
              placeholder="Search..."
            />
          </div>
        </div>
    </div>
  );
};

export default HeadingCard;