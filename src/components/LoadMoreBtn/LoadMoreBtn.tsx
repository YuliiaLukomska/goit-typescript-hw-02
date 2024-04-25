import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  isLoading: boolean;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick, isLoading }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading" : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
