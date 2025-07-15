import { Link } from "react-router";
import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/booksApi";
import Spinner from "@/pages/Shared/Spinner";

const LatestBooks = () => {  
  const { data: books, isLoading, isError } = useGetBooksQuery();
  if (isLoading) return <div className="py-10"><Spinner></Spinner></div>;
  if (isError || !books) return <p>Error loading books.</p>;
  return (
    <section className="py-10 bg-white">
      <div className="main_container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Latest Books
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {books?.data?.slice(0,5)?.map((book, idx) => (
            <BookCard key={idx} book={book}></BookCard>
          ))}
        </div>
        <div className="text-center">
          <Link to={"/books"}>
            <Button className="mt-5 px-5 rounded cursor-pointer text-white bg-primary hover:bg-secondary">
              All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBooks;
