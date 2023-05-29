import { useState } from "react";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import ReactPaginate from 'react-paginate';


const OrderTab = ({ items }) => {
    const itemsPerPage = 6; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(0);
    const [showAllItems, setShowAllItems] = useState(false);

    // Calculate the index of the first and last item to display
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = showAllItems ? items : items.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        setShowAllItems(false);
    };

    return (
        <div>
            <div className='grid md:grid-cols-3 p-2 gap-10 max-w-screen-xl mx-auto'>
                {currentItems.map(item => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
            {!showAllItems && items.length > itemsPerPage && (
                // pagination
                <ReactPaginate
                    pageCount={Math.ceil(items.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName="flex justify-center mt-8"
                    pageClassName="inline-block mx-1"
                    pageLinkClassName="px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                    previousClassName="inline-block mx-1"
                    nextClassName="inline-block mx-1"
                    previousLinkClassName="px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold"
                    nextLinkClassName="px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold"
                    activeClassName="font-bold bg-gray-300"
                />
            )}
            <div className="text-center my-5 font-bold">
                {!showAllItems && items.length > itemsPerPage && (
                    <button onClick={() => setShowAllItems(true)}>Show All</button>
                )}
            </div>
        </div>
    );
};

export default OrderTab;