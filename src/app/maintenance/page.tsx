const MaintenancePage = () => (
  <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-4 bg-secondary shadow-lg rounded-lg text-text text-center">
        <h1 className="text-4xl font-semibold text-text mb-4">
          Site Under Maintenance
        </h1>
        <p className="text-lg mb-4">
          Sorry, this site is currently under maintenance. Please come back
          later.
          <br />
          <br />
          You can get in touch with me by mail :{" "}
          <a
            href="mailto:Pavel.k.i@hotmail.com"
            className="text-blue-400 hover:underline"
          >
            <b>Pavel.k.i@hotmail.com</b>
          </a>
        </p>
      </div>
    </div>
  </>
);

export default MaintenancePage;
