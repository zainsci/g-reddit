const Footer = () => {
  return (
    <div className="w-full h-16">
      <div className="flex justify-center items-center mt-5">
        <small className="text-gray-400">
          <a href="/" className="hover:underline">
            Terms
          </a>
          {" • "}
          <a href="/" className="hover:underline">
            Privacy
          </a>
          {" • "}
          <a href="/" className="hover:underline">
            Program Policy
          </a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
