const Footer = () => {
  return (
    <>
      <footer className="bg-background text-text p-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
