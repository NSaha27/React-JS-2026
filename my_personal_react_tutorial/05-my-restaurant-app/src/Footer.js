function Footer(){
  const currentHour = new Date().getHours();
  return (
    <div className="footer">
      <p className="">
        {currentHour > 10 && currentHour < 22
          ? "***our restaurant is open now, come visit us or order online!"
          : "***our restaurant is close now, please visit us or order online tomorrow!"}
      </p>
      <a href="/cart" className="btn">
        Go to Cart
      </a>
    </div>
  );
}

export default Footer;