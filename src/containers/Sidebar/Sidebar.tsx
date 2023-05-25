import classes from "./Sidebar.module.scss";


const Sidebar = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wishlistContainer}>
        <div className={classes.wishlist}>Wishlist1</div>
        <div className={classes.wishlist}>Wishlist2</div>
        <div className={classes.wishlist}>Wishlist3</div>
        <div className={classes.wishlist}>Wishlist4</div>
        <div className={classes.wishlist}>Wishlist5</div>
      </div>
      <div className={classes.basket}>
        Basket
      </div>
    </div>
  );
};

export default Sidebar;
