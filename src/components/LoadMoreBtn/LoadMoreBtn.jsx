import css from './loadMoreBtn.module.css';

// export const LoadMoreBtn = ({ onClickRender }) => (
//   <div className={css.buttonContainer}>
//     <button className={css.button} type="button" onClick={onClickRender}>
//       Load more
//     </button>
//   </div>
// );

export const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <div className={css.buttonContainer}>
      <button className={css.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
