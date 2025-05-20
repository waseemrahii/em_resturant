// import * as React from 'react';
// import usePagination from '@mui/material/usePagination';
// import { styled } from '@mui/material/styles';

// const List = styled('ul')({
//   listStyle: 'none',
//   padding: 0,
//   margin: 0,
//   display: 'flex',
// });

// export default function Pagging() {
//   const { items } = usePagination({
//     count: 10,
//   });

//   return (
//     <nav>
//       <List>
//         {items.map(({ page, type, selected, ...item }, index) => {
//           let children = null;

//           if (type === 'start-ellipsis' || type === 'end-ellipsis') {
//             children = '…';
//           } else if (type === 'page') {
//             children = (
//               <button
//                 type="button"
//                 className={`px-3 py-1 border rounded ${selected ? 'font-bold border-blue-500' : 'border-gray-300'}`}
//                 {...item}
//               >
//                 {page}
//               </button>
//             );
//           } else {
//             children = (
//               <button
//                 type="button"
//                 className="px-3 py-1 border rounded border-gray-300"
//                 {...item}
//               >
//                 {type}
//               </button>
//             );
//           }

//           return <li key={index} className="mr-2">{children}</li>;
//         })}
//       </List>
//     </nav>
//   );
// }

import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap', // Allow items to wrap
});
const Pagging =()=> {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center sm:items-start">
        {/* Text on one line */}
       
        
        {/* Pagination on the next line */}
        <nav className="w-full flex justify-center sm:justify-start">
          <List>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;

              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                children = (
                  <button
                    type="button"
                    className={`px-3 py-1 border rounded ${selected ? 'font-bold border-blue-500' : 'border-gray-300'}`}
                    {...item}
                  >
                    {page}
                  </button>
                );
              } else {
                children = (
                  <button
                    type="button"
                    className="px-3 py-1 border rounded border-gray-300"
                    {...item}
                  >
                    {type}
                  </button>
                );
              }

              return <li key={index} className="mr-2">{children}</li>;
            })}
          </List>
        </nav>
      </div>
      {/* Blue line for small screens */}
      <div className="border-t-2 border-blue-500 mt-4 w-full sm:hidden"></div>
    </div>
  );
}

export default Pagging;



