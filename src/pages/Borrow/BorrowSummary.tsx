import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowSummaryQuery } from "@/redux/api/borrowApi";
import Spinner from "../Shared/Spinner";

const BorrowSummary = () => {
  const { data:borrows, isLoading, isError} = useGetBorrowSummaryQuery();

  if (isLoading) {
    return (
      <div className="main_container py-10 text-center">
        <div className="pt-10"><Spinner></Spinner></div>;
      </div>
    );
  }


  if (isError || !borrows?.data) {
    return (
      <div className="main_container py-10 text-center">
        <p className="text-lg text-red-500">Failed to load borrow summary.</p>
      </div>
    );
  }

// console.log(borrows)
  return (
    <div className="main_container py-10 pt-20">
      <h2 className="text-2xl md:text-3xl font-bold my-5">
        Borrow Summary
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <Table>
          <TableCaption>A summary of all borrowed books</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-200">
              <TableHead className=" font-semibold text-base">
                No.
              </TableHead>
              <TableHead className=" font-semibold text-base">
                Book Title
              </TableHead>
              <TableHead className=" font-semibold text-base">
                ISBN
              </TableHead>
              <TableHead className=" font-semibold text-base text-center">
                Total Quantity Borrowed
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {borrows?.data?.map((entry, index:number) => (
              <TableRow key={index}>
                <TableCell className="font-medium m text-gray-800">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-gray-800">
                  {entry.book.title}
                </TableCell>
                <TableCell className="text-gray-600">
                  {entry.book.isbn}
                </TableCell>
                <TableCell className="text-center font-semibold text-green-600">
                  {entry.totalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;
