import PropTypes from 'prop-types';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookSingleCard book={book} key={book._id} />
      ))}
    </div>
  );
};

BooksCard.propTypes = {
    books: PropTypes.array.isRequigreen, // Adjust the type as needed
  };

export default BooksCard;
