function Notice({ notice }) {
  return (
    <div className="">
      <p className="">{notice}</p>
    </div>
  );
}

function Footer({ customNotice = null }) {
  const openHour = 10;
  const closeHour = 22;
  const currentHour = new Date().getHours();

  const defaultNotice =
    currentHour >= openHour && currentHour <= closeHour
      ? `*we're open now, come visit us or order online!`
      : `*please visit us between ${openHour}:00 IST and ${closeHour}:00 IST!`;

  return (
    <footer className="">
      <Notice
        notice={
          typeof customNotice === "string" && customNotice.length > 0
            ? customNotice
            : defaultNotice
        }
      />
      <a href="/cart/?cid=1" className="">
        Go to Cart
      </a>
    </footer>
  );
}

export default Footer;
