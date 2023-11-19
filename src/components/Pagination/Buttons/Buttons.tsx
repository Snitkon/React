import './styled.css';

type Props = {
  currentPage: number;
  prevClick: (value: number) => void;
  nextClick: (value: number) => void;
  countPage: number;
};

function Buttons({ currentPage, prevClick, nextClick, countPage }: Props) {
  return (
    <>
      <button
        disabled={currentPage <= 1}
        onClick={() => prevClick(currentPage - 1)}
        type="button"
      >
        prev
      </button>
      <span>{currentPage}</span>
      <button
        disabled={currentPage >= countPage}
        onClick={() => nextClick(currentPage + 1)}
        type="button"
      >
        next
      </button>
    </>
  );
}

export default Buttons;
