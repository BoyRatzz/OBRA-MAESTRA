import { useState } from "react";

export default function Feedback({ data, newFeed }) {
  const [searchFilter, setSearchFilter] = useState("");

  const filteredItem = data.filter((item) =>
    item.fullName.toLowerCase().includes(searchFilter.toLowerCase())
  );

  console.log(filteredItem);

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
    // console.log(searchFilter);
  };

  return (
    <div className="flex flex-col w-full py-5">
      <div className="flex ml-auto px-8 pb-3">
        <input
          type="text"
          placeholder="Name Search..."
          className="rounded-xl text-center"
          onChange={handleChange}
          value={searchFilter}
        />
      </div>
      <table className="table table-auto w-full border-separate">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company/Institution</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItem?.map((feed) => (
            <tr key={feed.fullName} className="text-center">
              <td>{feed.fullName}</td>
              <td>{feed.company}</td>
              <td>{feed.message}</td>
              <td>
                <button
                  className="bg-red-500 px-5 py-2 text-white rounded-lg"
                  onClick={() => {
                    //   console.log(feed);
                    newFeed((prev) => {
                      return prev.filter((i) => {
                        return i.fullName !== feed.fullName;
                      });
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
